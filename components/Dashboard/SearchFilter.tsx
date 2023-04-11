import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";

const SearchFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="transition-all m-8 pl-2 flex-1 flex justify-between items-center">
      {/* Search */}
      <div className="flex items-center flex-1 border-2 border-gray-300  hover:border-2 hover:border-black hover:border-solid rounded-md">
        <AiOutlineSearch className="m-2" size={25} />
        <input
          className="py-2 w-full px-2 text-sm font-medium border-none outline-none space-x-1"
          type="text"
          name="search"
          id="search"
          placeholder="Search.."
        />
      </div>

      {/* Formatter */}
      <div className="rounded-md ml-3 flex items-cebter mx-2 border-2 border-gray-300">
        <button className="p-2.5 cursor-pointer bg-gray-200">
          <MdOutlineDashboardCustomize className="" size={20} />
        </button>
        <button className="p-2.5 cursor-pointer">
          <BsListCheck size={20} />
        </button>
      </div>

      {/* Filter */}
      <div className="relative rounded-md flex items-cebter">
        <button
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="flex w-full items-cebter gap-1 bg-black text-white hover:bg-white hover:text-black border-2 hover:border-2 hover:border-black py-2 px-4 rounded-lg "
        >
          <span>Add New..</span>
          <RxCaretDown size={25} className=" " />
        </button>
        <ul
          className={clsx(
            "absolute top-11 flex flex-col bg-white w-full p-1 border-2 border-black",
            isOpen ? "visible" : "invisible"
          )}
        >
          <li className="hover:bg-gray-100 py-1  ml-2">
            <Link href="/user">Project</Link>
          </li>
          <li className="hover:bg-gray-200 py-1  ml-2">
            <Link href="#">Domain</Link>
          </li>
          <li className="hover:bg-gray-200 py-1  ml-2">
            <Link href="#">Team</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchFilter;
