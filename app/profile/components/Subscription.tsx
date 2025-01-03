"use client";
import useUser from "@/app/hook/useUser";
import { Button } from "@/components/ui/button";
import { manageBilling } from "@/lib/actions/stripe";
import React from "react";

export default function Subscription() {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleBilling = async () => {
    if (user?.subscription?.customer_id) {
      const data = JSON.parse(
        await manageBilling(user?.subscription?.customer_id)
      );

      window.location.href = data.url;
    }
  };

  return (
    <div className="flex flex-col items-start justify-center space-y-2 mt-4">
      <h1 className="text-3xl font-bold">Hi, {user?.display_name}</h1>
      {user?.subscription?.end_at && (
        <p>
          Your Subscription will end on{" "}
          {new Date(user?.subscription?.end_at).toDateString()}
        </p>
      )}

      {user?.subscription?.customer_id && (
        <Button variant="danger" onClick={handleBilling}>
          Cancel
        </Button>
      )}
    </div>
  );
}
