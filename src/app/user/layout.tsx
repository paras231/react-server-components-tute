"use client";

import React from "react";
import Link from "next/link";
const Userlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <nav className="flex gap-20">
          <Link href={"/dashboard/settings"}>Settings</Link>
          <Link href={"/dashboard"}>Dashboard</Link>
          <Link href={"/user"}>User</Link>
        </nav>
      </div>
      {children}
    </>
  );
};

export default Userlayout;
