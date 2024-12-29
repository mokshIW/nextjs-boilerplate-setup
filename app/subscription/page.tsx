import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SubscriptionPage() {
  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">This is a Subscription Page.</h1>
      <Button variant="subtle">
        <Link href="/" className="font-bold text-xl active:scale-105">
          Home
        </Link>
      </Button>
    </div>
  );
}
