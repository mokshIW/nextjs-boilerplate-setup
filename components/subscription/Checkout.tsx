"use client";
import React, { useState } from "react";
import useUser from "@/app/hook/useUser";
import { useRouter } from "next/navigation";
import { checkout } from "@/lib/actions/stripe";
import { loadStripe } from "@stripe/stripe-js";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";

export default function Checkout({ priceId }: { priceId: string }) {
  const { data: user } = useUser();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (user?.id) {
      setLoading(true);
      const data = JSON.parse(
        await checkout(user.email, priceId, location.origin + location.pathname)
      );

      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
      );
      const result = await stripe?.redirectToCheckout({ sessionId: data.id });

      if (result?.error) {
        alert("Fail to checkout");
      }

      setLoading(false);
    } else {
      router.push("/auth?next=" + location.pathname);
    }
  };

  return (
    <button
      className="flex items-center justify-center mt-4 md:mt-6 w-full bg-blue-700 text-white font-bold py-2 px-3 md:py-2 md:px-4 lg:py-3 lg:px-6 rounded-lg shadow-md shadow-blue-600 hover:shadow-lime-700 hover:bg-lime-700 hover:scale-105 duration-200 transition"
      onClick={handleCheckout}
    >
      Getting Started
      <AiOutlineLoading3Quarters
        className={cn("animate-spin ml-2", loading ? "block" : "hidden")}
      />
    </button>
  );
}
