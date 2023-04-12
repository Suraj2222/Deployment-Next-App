import clsx from "clsx";
import Link from "next/link";
import React, { useMemo, useState } from "react";

const ProjectNavbar = () => {
  const [active, setActive] = useState("project");

  const dashboardNavbarItems = useMemo(
    () => [
      {
        path: "/user/next-js-website/",
        name: "Project",
      },
      {
        path: "/user/next-js-website/deployments",
        name: "Deployments",
      },
      {
        path: "/user/next-js-website/analytics",
        name: "Analytics",
      },
      {
        path: "/user/next-js-website/logs",
        name: "Logs",
      },
      {
        path: "/user/next-js-website/cron-jobs",
        name: "Cron Jobs",
      },
      {
        path: "/user/next-js-website/edge-config",
        name: "Edge Config",
      },
      {
        path: "/user/next-js-website/settings",
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

export default ProjectNavbar;
