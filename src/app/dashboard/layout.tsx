import React from "react";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className="text-2xl font-bold">Dashboard layout</h1>
      {children}
    </>
  );
};

export default DashboardLayout;
