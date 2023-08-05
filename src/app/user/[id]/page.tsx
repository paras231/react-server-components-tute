import React from "react";

type paramsType = {
  id: string;
};

const fetchSinglePost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};

const Page = async ({ params }: { params: paramsType }) => {
  const data = await fetchSinglePost(params.id);

  return (
    <>
      <div className="bg-purple-600 text-white font-lg rounded-lg p-2 w-96">
        <span>{data.id}</span>
        {data.title}
      </div>
    </>
  );
};

export default Page;
