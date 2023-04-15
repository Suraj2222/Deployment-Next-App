import Settings from "@/components/Account/Settings";
import Navbar from "@/components/Layout/Navbar";
import { dashboardNavbarItems } from "@/data";
import React from "react";

const AccountPage = () => {
  return (
    <>
      <Navbar navItems={dashboardNavbarItems} />
      <Settings />
    </>
  );
};

export default AccountPage;
