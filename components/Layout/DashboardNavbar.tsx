import clsx from "clsx";
import Link from "next/link";
import React, { useMemo, useState } from "react";

const DashboardNavbar = () => {
  const [active, setActive] = useState("overview");

  const dashboardNavbarItems = useMemo(
    () => [
      {
        path: "/dashboard",
        name: "Overview",
      },
      {
        path: "/dashboard/integrations",
        name: "Integration",
      },
      {
        path: "/dashboard/activity",
        name: "Activity",
      },
      {
        path: "/dashboard/doamins",
        name: "Domains",
      },
      {
        path: "/dashboard/usage",
        name: "Usage",
      },
      {
        path: "/dashboard/monitoring",
        name: "Monitoring",
      },
      {
        path: "/dashboard/stores",
        name: "Edge Config",
      },
      {
        path: "/account",
        name: "Settings",
      },
    ],
    []
  );

  return (
    <ul className="w-screen flex justify-start ml-2 items-center border-2 py-2 border-solid  border-gray-200">
      {dashboardNavbarItems.map((item) => {
        return (
          <li className="ml-6" key={item.name}>
            <Link
              href={item.path}
              onClick={() => setActive(item.name.toLowerCase())}
            >
              <span
                className={clsx(
                  "text-black transition-all hover:font-medium  py-2 text-sm",
                  active === item.name.toLowerCase() &&
                    "border-b-4 border-solid border-black"
                )}
              >
                {item.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DashboardNavbar;
