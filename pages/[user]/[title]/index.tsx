import Navbar from "@/components/Layout/Navbar";
import Project from "@/components/Project";
import { projectNavbarItems } from "@/data";
import React from "react";

const ProjectPage = () => {
  return (
    <>
      <Navbar navItems={projectNavbarItems} />
      <Project />
    </>
  );
};

export default ProjectPage;
