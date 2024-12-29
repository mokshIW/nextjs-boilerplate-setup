import React from "react";
import Profile from "./Profile";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" w-full z-50 flex justify-between items-center h-20 py-8 shadow-md px-6">
      <Link href="/">
        <h1 className="text-xl font-bold">Logo</h1>
      </Link>

      <Profile />
    </div>
  );
};

export default Navbar;
