"use client";
import React from "react";
import useUser from "../hook/useUser";
import Post from "@/components/Post";
import Price from "@/components/subscription/Price";

export default function SubscriptionPage() {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const isActive = !user?.subscription?.end_at
    ? false
    : new Date(user.subscription.end_at) > new Date();

  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">This is a Subscription Page.</h1>

      <div>
        {isActive ? (
          <Post />
        ) : (
          <div className="flex flex-col items-center justify-center space-y-2">
            <h1 className="text-3xl font-bold">
              You need to subscribe to see the data!
            </h1>
            <Price />
          </div>
        )}
      </div>
    </div>
  );
}
