import Billing from "@/components/Account/Settings/Billing";
import Navbar from "@/components/Layout/Navbar";
import { dashboardNavbarItems } from "@/data";
import React from "react";

const BillingPage = () => (
  <>
    <Navbar navItems={dashboardNavbarItems} />
    <Billing />
  </>
);

export default BillingPage;
