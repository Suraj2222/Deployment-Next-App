import VerticalNavbar from "@/components/Layout/VerticalNavbar";
import { projectSettingsItems } from "@/data";
import Link from "next/link";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Domains = () => {
  return (
    <section className="container-1200 mx-auto flex flex-col">
      {/* Heading */}
      <div className="my-4 py-4">
        <h2 className="text-2xl font-bold pl-2">Project Settings</h2>
      </div>

      {/* Horizontal Bar */}
      <div className="relative">
        <hr className="absolute -left-full border-1 border-gray-400 w-full" />
        <hr className="absolute left-0 border-1 border-gray-400 w-screen" />
      </div>

      {/* Setrings Section */}
      <div className="flex  my-10">
        {/* SideBar */}
        <div className="basis-1/4 ">
          <VerticalNavbar navItems={projectSettingsItems} />
        </div>
        {/* Domains */}
        <div className="basis-3/4 flex flex-col gap-8">
          {/* Domain Box */}
          <div className="flex flex-col gap-2">
            {/* Domain Alteration */}
            <div className="pb-1 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">Domains</h3>
              <p>
                These domains are assigned to your Production Deployments.
                Optiona, a different Git branch or a redirection to another
                domain can be configured for each one.
              </p>
              <div className="flex my-2 gap-2">
                <input
                  className="basis=4/5 w-full p-1 px-4"
                  type="text"
                  placeholder="mywebsite.com"
                />
                <button className="basis=1/5 p-1.5 px-6 bg-black text-white border-2 hover:border-black hover:bg-white hover:text-black opacity-50 cursor-pointer">
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Domains Cards */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 p-4 border-2 border-gray-400 rounded-lg">
              {/* Links */}
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md"
                  >
                    next-js-blog-website-1.vercel.app
                  </a>
                  <span className="rounded-full  bg-black text-white text-xs px-2 py-0">
                    Production
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="transition-all border-2 border-gray-50 px-2 cursor-pointer hover:font-medium hover:border-black">
                    Refresh
                  </button>
                  <button className="transition-all border-2 border-gray-50   px-2 cursor-pointer hover:font-medium hover:border-black">
                    Edit
                  </button>
                </div>
              </div>
              {/* Task  Completion */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <RiCheckboxCircleFill size={20} />
                  <span>Valid Configuration</span>
                </div>
                <div className="flex items-center gap-1">
                  <RiCheckboxCircleFill size={20} />
                  <span>Assigned to Main</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4 border-2 border-gray-400 rounded-lg">
              {/* Links */}
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md"
                  >
                    next-js-blog-website-1.vercel.app
                  </a>
                  <span className="rounded-full  bg-black text-white text-xs px-2 py-0">
                    Production
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="transition-all border-2 border-gray-50 px-2 cursor-pointer hover:font-medium hover:border-black">
                    Refresh
                  </button>
                  <button className="transition-all border-2 border-gray-50   px-2 cursor-pointer hover:font-medium hover:border-black">
                    Edit
                  </button>
                </div>
              </div>
              {/* Task  Completion */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <RiCheckboxCircleFill size={20} />
                  <span>Valid Configuration</span>
                </div>
                <div className="flex items-center gap-1">
                  <RiCheckboxCircleFill size={20} />
                  <span>Assigned to Main</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4 border-2 border-gray-400 rounded-lg">
              {/* Links */}
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md"
                  >
                    next-js-blog-website-1.vercel.app
                  </a>
                  <span className="rounded-full  bg-black text-white text-xs px-2 py-0">
                    Production
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="transition-all border-2 border-gray-50 px-2 cursor-pointer hover:font-medium hover:border-black">
                    Refresh
                  </button>
                  <button className="transition-all border-2 border-gray-50   px-2 cursor-pointer hover:font-medium hover:border-black">
                    Edit
                  </button>
                </div>
              </div>
              {/* Task  Completion */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <RiCheckboxCircleFill size={20} />
                  <span>Valid Configuration</span>
                </div>
                <div className="flex items-center gap-1">
                  <RiCheckboxCircleFill size={20} />
                  <span>Assigned to Main</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domains;
