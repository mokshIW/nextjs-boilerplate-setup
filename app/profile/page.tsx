import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Subscription from "./components/Subscription";

const ProfilePage = () => {
  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">This is a Profile Page.</h1>
      <Button variant="subtle">
        <Link href="/" className="font-bold text-xl active:scale-105">
          Home
        </Link>
      </Button>

      <Subscription />
    </div>
  );
};

export default ProfilePage;
