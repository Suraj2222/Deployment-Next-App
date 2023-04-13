import Deployment from "@/components/Deployment";
import Navbar from "@/components/Layout/Navbar";
import { deploymentNavbarItems } from "@/data";
import React from "react";

const DeploymentPage = () => {
  return (
    <>
      <Navbar navItems={deploymentNavbarItems} />
      <Deployment />
    </>
  );
};

export default DeploymentPage;
