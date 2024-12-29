import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SubscriptionSuccessPage() {
  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center justify-center space-y-4">
      <CheckCircle className="text-green-500 w-20 h-20" />
      <h1 className="text-3xl font-bold text-gray-200 text-center">
        Subscription Activated!
      </h1>
      <p className="text-lg text-gray-w00 text-center">
        Thank you for subscribing. Your account is now active, and you can
        access your dashboard.
      </p>
      <Button variant="success">
        <Link href="/dashboard" className="font-bold text-xl active:scale-105">
          Go to Dashboard
        </Link>
      </Button>
    </div>
  );
}
