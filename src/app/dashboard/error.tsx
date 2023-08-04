"use client";

import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <>
      <h1 className="flex justify-center items-center">{error.message} </h1>
      <button onClick={()=>reset()}>Try again</button>
    </>
  );
};

export default Error;
