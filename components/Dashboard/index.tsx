import { dashboardNavbarItems, projects } from "@/data";
import NoProject from "./NoProject";
import Project from "./Project";
import SearchFilter from "./SearchFilter";
import Navbar from "../Layout/Navbar";

const Dashboard = () => (
  <div>
    <Navbar navItems={dashboardNavbarItems} />
    <section className="container-1200 mx-auto">
      <SearchFilter />
      {projects.length ? <Project /> : <NoProject />}
    </section>
  </div>
);

export default Dashboard;
