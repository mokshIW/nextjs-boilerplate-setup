"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabaseBrowser } from "@/lib/supabase/browser";

const initUser = {
  id: "",
  display_name: "",
  email: "",
  image_url: "",
  created_at: "",
};

export default function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const supabase = await supabaseBrowser();
      const { data } = await supabase.auth.getSession();

      if (data.session?.user) {
        // fetch user information
        const { data: user } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", data.session.user.id)
          .single();

        return user;
      }

      return initUser;
    },
  });
}
