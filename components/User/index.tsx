import clsx from "clsx";
import { useMemo, useState } from "react";
import { BiUserX } from "react-icons/bi";
import {
  AiOutlinePlus,
  AiOutlineArrowRight,
  AiOutlineSearch,
  AiOutlineFileText,
} from "react-icons/ai";
import { BsGithub, BsFillPlusCircleFill } from "react-icons/bs";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { RxCaretDown, RxCrossCircled } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { TbBrandNextjs } from "react-icons/tb";

const User = () => {
  const [hovering, setHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const repos = useMemo(
    () => [
      {
        id: "1",
        title: "NextLabDashboard",
        icon: <TbBrandNextjs size={20} />,
        duration: "2d",
      },
      {
        id: "2",
        title: "BharatGPT",
        icon: <TbBrandNextjs size={20} />,
        duration: "9d",
      },
      {
        id: "3",
        title: "Next-Ecommerce",
        icon: <TbBrandNextjs size={20} />,
        duration: "15d",
      },
      {
        id: "4",
        title: "Dashboard-Next-App",
        icon: <TbBrandNextjs size={20} />,
        duration: "30d",
      },
      {
        id: "5",
        title: "Ecommerce-Next-App-Next-App",
        icon: <TbBrandNextjs size={20} />,
        duration: "45d",
      },
      {
        id: "6",
        title: "Android-App",
        icon: <TbBrandNextjs size={20} />,
        duration: "54d",
      },
    ],
    []
  );

  return (
    <div className="container-1200 mx-auto flex flex-col gap-4 m-8 h-[80vh]">
      {/* iNFO */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">
            Let&apos;s build something new.
          </h1>
          <h2 className="text-sm tracking-wide">
            To deploy a new Project, import an existing Git Repository or get
            started with one of our Templates.
          </h2>
        </div>
        <div className="relative">
          <button
            onClick={() => {}}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="flex justify-center items-center gap-2 transition-all border-2 border-gray-200 hover:border-black py-2 px-4 rounded-lg hover:font-medium"
          >
            <BiUserX size={20} />
            <span>Collaborate with a Team</span>
          </button>
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={clsx(
              "bg-white absolute top-10 flex flex-col gap-2 border-2 border-gray-200 p-2 transition-all",
              hovering ? "visible" : "collapse opacity-0"
            )}
          >
            <span className="font-semibold text-xl my-1">Upgrade to Pro</span>
            <span>
              Additional resources. Security and collaboration features.
            </span>
            <button className="flex justify-center items-center gap-2 transition-all border-2 border-gray-200 hover:border-black py-2 my-2 px-4 rounded-lg hover:font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Import/Upload */}
      <div className="flex gap-6">
        {/* Import */}
        <div className="flex-1 flex flex-col flex-wrap h-full border-2 border-gray-400 rounded-md">
          {/* Top */}
          <div className="flex flex-col items-bwtween p-4">
            <h2 className="font-semibold text-xl">Import Git Repository</h2>
            {/* Actions */}
            <div className="flex items-center gap-4 my-4">
              {/* Select */}
              <div className="relative flex-1 items-center">
                <div className="flex items-center border-2 border-gray-100 gap-2 p-2 rounded-md transition-all hover:border-black">
                  <BsGithub size={20} />
                  <span className="text-lg">username</span>
                  <RxCaretDown
                    onClick={() => setIsOpen((prevState) => !prevState)}
                    className="ml-auto cursor-pointer"
                    size={20}
                  />
                </div>
                <div
                  className={clsx(
                    "text-sm absolute top-10.5 bg-white w-full visible flex flex-col cursor-pointer",
                    isOpen ? "visible" : "invisible"
                  )}
                >
                  <ul>
                    <li className="flex justify-between items-center p-2.5 hover:bg-gray-100">
                      <div className="flex gap-3">
                        <BsGithub size={20} />
                        <span>username</span>
                      </div>
                      <TiTick size={25} color="green" />
                    </li>
                  </ul>
                  <div className="cursor-pointer flex items-center p-2.5 hover:bg-gray-100 gap-3">
                    <AiOutlinePlus size={20} color="blue" />
                    <span onClick={() => {}}>Add Github Account</span>
                  </div>
                  <div className="cursor-pointer flex items-center p-2.5 hover:bg-gray-100 gap-3">
                    <HiOutlineSwitchHorizontal size={20} color="blue" />
                    <span onClick={() => {}}>Switch Git Provider</span>
                  </div>
                </div>
              </div>
              {/* Search */}
              <div className="flex-1 ">
                <div className="flex items-center flex-1 border-2 border-gray-300  hover:border-2 hover:border-black hover:border-solid rounded-md">
                  <AiOutlineSearch className="m-1 ml-2" size={25} />
                  <input
                    className="p-2 w-full  text-sm font-medium border-none outline-none space-x-1"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search.."
                  />
                </div>
              </div>
            </div>
            {/* Repos */}
            <div className="text-sm max-h-80 overflow-auto flex flex-col">
              {repos?.map(({ id, title, icon, duration }) => (
                <div
                  key={id}
                  className="flex items-center gap-2 p-2 border-2 border-gray-200"
                >
                  {icon}
                  <span>{title}</span>
                  <span>- {duration} ago</span>
                  <button className="ml-auto py-1 px-4 border-2 transition-all bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border-black">
                    Import
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom */}
          <div className="text-sm mt-auto border-t-4 border-gray-400 p-4">
            <button className="flex items-center gap-2">
              <span>Import Third-Party Git Repository</span>
              <AiOutlineArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Upload */}
        <div className="flex-1 flex flex-col border-2 rounded-md border-gray-400">
          <div className="font-semibold bg-black text-white flex justify-between items-center p-2 ">
            <h2 className="text-xl">Upload Project</h2>
          </div>
          <div className="h-full flex flex-col justify-center items-center">
            <div className="relative cursor-pointer">
              <AiOutlineFileText size={80} />
              <BsFillPlusCircleFill
                className="absolute bottom-0 -right-0"
                size={25}
              />
            </div>
            <h3 className="text-lg m-2 font-medium">
              Select your project folder to upload
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
