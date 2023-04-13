import clsx from "clsx";
import Link from "next/link";
import React, { useMemo, useState } from "react";

const Navbar = ({ navItems }) => {
  const [active, setActive] = useState("");

  return (
    <ul className="text-md w-screen flex justify-start ml-2 items-center border-2 pt-2 border-solid  border-gray-200">
      {navItems.map((item) => {
        return (
          <li
            className={clsx(
              "ml-6",
              active === "" &&
                "pb-2 first:border-b-4 first:border-solid first:border-black"
            )}
            key={item.name}
          >
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

export default Navbar;
