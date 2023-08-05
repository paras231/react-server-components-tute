"use client";
import Link from "next/link";
type userTableProps = {
  data: [];
};

const UserTable = ({ data }: userTableProps) => {
  return (
    <>
      <h1>User Table</h1>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Team members
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Post id</th>
                <th className="py-3 px-6">Title</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {data.map((item: any, idx) => (
                <tr key={idx}>
                  <Link href={`/user/${item.id}`}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                  </Link>
                  <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                </tr>
              ))}
            </tbody> 
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
