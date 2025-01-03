import { supabaseBrowser } from "@/lib/supabase/browser";
import React, { useEffect } from "react";

export default function Post() {
  const getPost = async () => {
    const supabase = supabaseBrowser();
    const { data } = await supabase.from("post").select("*");

    console.log(data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">This is a Protected Data page.</h1>
    </div>
  );
}
