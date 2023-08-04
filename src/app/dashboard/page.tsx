// this is the main route of dashboard.
// this is server component by default
import React from "react";
import axios from "axios";
import MovieCard from "./movieCard";

// we can import client components in server components.
const Page = async () => {
  // we can async await directly in server components
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return (
    <>
      <MovieCard data={data} />
    </>
  );
};

export default Page;
