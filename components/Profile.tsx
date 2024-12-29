"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import useUser from "@/app/hook/useUser";
import Image from "next/image";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/lib/constants";

const Profile = () => {
  const { isFetching, data } = useUser();

  const queryClient = useQueryClient();

  const router = useRouter();

  // const pathname = usePathname();

  if (isFetching) {
    return <></>;
  }

  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    queryClient.clear();
    await supabase.auth.signOut();
    router.refresh();

    // if (protectedRoutes.includes(pathname)) {
    //   router.replace("/auth?next=" + pathname);
    // }
  };

  return (
    <div>
      {!data?.id ? (
        <Link href="/auth" className="animate-fade">
          <Button variant="outline">Sign In</Button>
        </Link>
      ) : (
        <>
          {data?.image_url ? (
            <Image
              src={data.image_url || ""}
              alt={data.display_name || ""}
              width={40}
              height={40}
              className="rounded-full ring-2 ring-blue-300 hover:ring-4 hover:shadow-lg hover:shadow-blue-300 duration-200 transition-all animate-fade cursor-pointer"
              onClick={handleLogout}
            />
          ) : (
            <div
              className="h-[40px] w-[40px] rounded-full text-xl text-green-800 bg-green-300 font-bold uppercase flex items-center justify-center ring-2 ring-blue-300 hover:ring-4 hover:shadow-lg hover:shadow-blue-300 duration-200 transition-all animate-fade cursor-pointer"
              onClick={handleLogout}
            >
              <h1>{data.email[0]}</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
