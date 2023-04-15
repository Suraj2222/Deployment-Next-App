import Navbar from "@/components/Layout/Navbar";
import Settings from "@/components/Project/Settings";
import { projectNavbarItems } from "@/data";

const SettingsPage = () => {
  return (
    <>
      <Navbar navItems={projectNavbarItems} />
      <Settings />;
    </>
  );
};

export default SettingsPage;
