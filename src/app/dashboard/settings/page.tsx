import React from "react";
import Link from "next/link";
const Page = () => {
  return (
    <>
      <h1 className="text-purple-400 font-bold text-2xl flex justify-center items-center mt-32">
        Dash board setting page
      </h1>
      <div className="flex justify-center items-center">
        <button className="bg-blue-700 rounded-md border-none outline-none cursor-pointer p-2 text-white">
          <Link href={"/dashboard"}>Go Back</Link>
        </button>
      </div>
    </>
  );
};

export default Page;
