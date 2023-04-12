import { projects } from "@/data";
import DashboardNavbar from "../Layout/DashboardNavbar";
import NoProject from "./NoProject";
import Project from "./Project";
import SearchFilter from "./SearchFilter";

const Dashboard = () => (
  <div>
    <DashboardNavbar />
    <section className="container-1200 mx-auto">
      <SearchFilter />
      {projects.length ? <Project /> : <NoProject />}
    </section>
  </div>
);

export default Dashboard;
