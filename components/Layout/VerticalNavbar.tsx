import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const VerticalNavbar = ({ navItems }) => {
  const [active, setActive] = useState("");

  return (
    <ul className="sticky top-0 text-mdflex flex-col justify-start ml-2 items-center pt-2 ">
      {navItems.map(({ name, path }) => {
        return (
          <li
            className={clsx(
              "my-1 p-1 w-full hover:bg-gray-100",
              active === "" ? "first:font-semibold" : ""
            )}
            key={name}
          >
            <Link href={path} onClick={() => setActive(name.toLowerCase())}>
              <span
                className={clsx(
                  "text-black transition-all hover:font-medium  py-2 text-sm",
                  active === name.toLowerCase() && "font-semibold"
                )}
              >
                {name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default VerticalNavbar;
