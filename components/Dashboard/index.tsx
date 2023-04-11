import DashboardNavbar from "../Layout/DashboardNavbar";
import NoProject from "./NoProject";
import SearchFilter from "./SearchFilter";

const Dashboard = () => (
  <div>
    <DashboardNavbar />
    <section className="container-1200 mx-auto">
      <SearchFilter />
      <NoProject />
    </section>
  </div>
);

export default Dashboard;
