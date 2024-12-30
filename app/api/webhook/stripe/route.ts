import Stripe from "stripe";
import { headers } from "next/headers";
import { buffer } from "node:stream/consumers";
import { supabaseAdmin } from "@/lib/supabase/admin";

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET!;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: any) {
  const rawBody = await buffer(req.body);

  try {
    const sig = (await headers()).get("stripe-signature");

    let event;

    try {
      event = stripe.webhooks.constructEvent(rawBody, sig!, endpointSecret);
    } catch (err: any) {
      return Response.json({ error: `Webhook Error: ${err?.message!}` });
    }

    switch (event.type) {
      case "invoice.payment_succeeded":
        // update here
        const result = event.data.object;
        const end_at = new Date(
          result.lines.data[0].period.end * 1000
        ).toISOString();
        const customer_id = result.customer as string;
        const subscription_id = result.subscription as string;
        const email = result.customer_email as string;

        const error = await onPaymentSucceeded(
          end_at,
          customer_id,
          subscription_id,
          email
        );

        if (error) {
          console.log("Error updating subscription: ", error);
          return Response.json({ error: error?.message });
        }

        break;

      case "customer.subscription.updated":
        const deleteSubscription = event.data.object;
        console.log("Subscription deleted: ", deleteSubscription.id);

        const cancelError = await onSubscriptionCancel(deleteSubscription.id);
        if (cancelError) {
          console.log("Error updating subscription: ", cancelError);
          return Response.json({ error: cancelError.message });
        }

        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return Response.json({});
  } catch (error: any) {
    return Response.json({ error: `Webhook Error: ${error?.message}` });
  }
}

async function onPaymentSucceeded(
  end_at: string,
  customer_id: string,
  subscription_id: string,
  email: string
) {
  const supabase = await supabaseAdmin();

  const { error } = await supabase
    .from("subscription")
    .update({ end_at, customer_id, subscription_id })
    .eq("email", email);

  return error;
}

async function onSubscriptionCancel(subscription_id: string) {
  const supabase = await supabaseAdmin();

  const { error } = await supabase
    .from("subscription")
    .update({ customer_id: null, subscription_id: null })
    .eq("subscription_id", subscription_id);

  return error;
}
