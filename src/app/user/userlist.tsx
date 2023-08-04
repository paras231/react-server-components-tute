import React from "react";
import UserTable from "./components/UserTable";
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const Userlist = async () => {
  const data = await fetchUsers();
  return (
    <div>
      <UserTable data={data} />
    </div>
  );
};

export default Userlist;
