import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/dashboard"}>
        <h1 className="flex justify-center items-center mt-20 hover:text-purple-700">
          Go to Dashboard
        </h1>
      </Link>
    </>
  );
}
