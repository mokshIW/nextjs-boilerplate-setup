"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { supabaseBrowser } from "@/lib/supabase/browser";

const page = () => {
  const handleLoginWithOAuth = (provider: "github" | "google") => {
    const supabase = supabaseBrowser();

    supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] px-4 md:px-8">
      <div className="w-full max-w-sm md:max-w-md rounded-md border p-4 md:p-5 space-y-4 md:space-y-5 relative bg-slate-900">
        <div className="flex items-center justify-center gap-2 md:gap-3">
          <KeyRound className="ml-1 md:ml-2" />
          <h1 className="text-xl md:text-2xl font-bold">Next + Supabase</h1>
        </div>
        <p className="text-base md:text-lg font-semibold text-gray-300 flex items-center justify-center">
          Register / SignIn Today
        </p>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-5">
          <Button
            className="w-fit font-bold text-md flex items-center gap-2 md:gap-3"
            variant="outline"
            onClick={() => handleLoginWithOAuth("github")}
          >
            <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
            Github
          </Button>
          <Button
            className="w-fit font-bold text-md flex items-center gap-2 md:gap-3"
            variant="outline"
            onClick={() => handleLoginWithOAuth("google")}
          >
            <FcGoogle className="w-9 h-8 md:w-8 md:h-8" />
            Google
          </Button>
        </div>

        <div className="glowbox -z-10"></div>
      </div>
    </div>
  );
};

export default page;
