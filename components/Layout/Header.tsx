import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AiFillCaretUp,
  AiOutlinePlusCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-gray-50 flex justify-between items-center py-4 mx-3">
      <div className="flex justify-between items-center gap-7">
        <span className="cursor-pointer">
          <Image src="/favicon.ico" alt="Logo" width={35} height={35} />
        </span>
        <div className="relative flex justify-between items-center gap-2.5 cursor-pointer">
          <Image src="/favicon.ico" alt="Logo" width={35} height={35} />
          <span className="font-bold ">suraj_kcri</span>
          <span className="text-white text-xs rounded-full py-0 px-2 bg-black">
            Hobby
          </span>
          <span
            onClick={() => setIsOpen((prevState) => !prevState)}
            className={clsx("mr-1", isOpen && "rotate-180 transition-all")}
          >
            <AiFillCaretUp />
          </span>
          <div
            className={clsx(
              "absolute top-12 left-3 transition-all translate-y-4 bg-white ",
              isOpen ? "visible translate-y-1" : "invisible"
            )}
          >
            <div className="flex justify-between items-center border-2">
              <AiOutlineSearch className="ml-2.5" size={25} />
              <input
                className="p-2 border-none outline-none"
                type="text"
                placeholder="Search.."
              />
            </div>
            <div className="flex flex-col">
              <span className="bg-gray-100 p-1 cursor-text">
                Personal Account
              </span>
              <ul>
                <li className="flex justify-between items-center p-2.5 hover:bg-gray-100">
                  <div className="flex gap-2">
                    <Image
                      src="/favicon.ico"
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                    <span>SurajKcri</span>
                  </div>
                  <TiTick size={25} color="green" />
                </li>
                <li className="flex justify-between items-center p-2.5 hover:bg-gray-100 ">
                  <div className="flex gap-2">
                    <Image
                      src="/favicon.ico"
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                    <span>JarusKcri</span>
                  </div>
                  <TiTick size={25} color="green" />
                </li>
              </ul>
              <div className="flex items-center p-2.5 hover:bg-gray-100 gap-3">
                <AiOutlinePlusCircle size={25} color="blue" />
                <span onClick={() => {}}>Create Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-6">
        <ul className="flex justify-between items-center gap-4">
          <li className="py-1 px-3 bg-white border-1 border-black rounded-lg transition-all hover:text-white hover:bg-black hover:border-white">
            <Link href="">Feedback</Link>
          </li>
          <li className="transition-all hover:font-semibold">
            <Link href="">ChangeLog</Link>
          </li>
          <li className="transition-all hover:font-semibold">
            <Link href="">Help</Link>
          </li>
          <li className="transition-all hover:font-semibold">
            <Link href="">Docs</Link>
          </li>
        </ul>
        <div className="flex justify-between items-center gap-3 cursor-pointer">
          <span>
            <GrNotification />
          </span>
          <Image src="/favicon.ico" alt="Logo" width={35} height={35} />
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
