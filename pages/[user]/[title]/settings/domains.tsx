import Navbar from "@/components/Layout/Navbar";
import Domains from "@/components/Project/Settings/domains";
import { projectNavbarItems } from "@/data";
import React from "react";

const SettingsDoamins = () => {
  return (
    <>
      <Navbar navItems={projectNavbarItems} />
      <Domains />;
    </>
  );
};

export default SettingsDoamins;
