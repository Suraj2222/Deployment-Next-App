import VerticalNavbar from "@/components/Layout/VerticalNavbar";
import { projectSettingsItems } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";

const Settings = () => {
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
        {/* Main Content */}
        <div className="basis-3/4 flex flex-col gap-8">
          {/* Project Name Box */}
          <div className="flex flex-col  gap-1 border-2 border-gray-400 rounded-lg">
            <div className="p-4 pb-1">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p>
                Used to identify your Project on the Dashboard, Vercel CLI, and
                in the URL of your Deployments.
              </p>
              <div className="flex my-2 gap-2">
                <button className="basis=1/4 p-1 border-2 border-gray-100 opacity-80 cursor-text">
                  vercel.com/bit1100
                </button>
                <input
                  className="basis=3/4 w-full p-1 px-4"
                  type="text"
                  value="Project Name"
                />
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-4">
              <span>
                Learn more about <Link href="#">Project Name</Link>
              </span>
              <button className="border-2 border-gray-50 opacity-80 cursor-text">
                Save
              </button>
            </div>
          </div>

          {/* Build & Deployment Settings */}
          <div className="flex flex-col  gap-1 border-2 border-gray-400 rounded-lg">
            <div className="p-4 pb-1">
              <h3 className="text-xl font-semibold mb-2">
                Build & Development Settings
              </h3>
              <p>
                When using a framework for a new project, it will be
                automatically detected. As a result, several project settings
                are automatically configured to achieve the best result. You can
                override them below.
              </p>
              <div className="flex my-2 gap-2 flex-col">
                <span>
                  <small>Framework Project</small>
                </span>
                <div className="flex items-center border-2 transtion-all  hover:border-black p-1 cursor-pointer">
                  <TbBrandNextjs size={20} className="mr-2" />
                  <span>Nextjs</span>
                  <BsChevronDown size={20} className="ml-auto" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-4">
              <span>
                Learn more about{" "}
                <Link href="#"> Build and Development Settings</Link>
              </span>
              <button className="border-2 border-gray-50 opacity-80 cursor-text">
                Save
              </button>
            </div>
          </div>

          {/* Transfer Project */}
          <div className="flex flex-col  gap-1 border-2 border-gray-400 rounded-lg">
            <div className="p-4 pb-1">
              <h3 className="text-xl font-semibold mb-2">Transfer Project</h3>
              <p>
                Get full access to collaborative features, multiple Concurrent
                Builds, and more powerful Serverless Functions by transferring
                your Project to a Vercel Team.
              </p>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-4">
              <span>
                Learn more about <Link href="#"> Transferring Projects</Link>
              </span>
              <button className="border-2 border-gray-50 opacity-80 cursor-text">
                Tranfer
              </button>
            </div>
          </div>

          {/* Delete Project */}
          <div className="flex flex-col  gap-1 border-2 border-red-400 rounded-lg">
            <div className="p-4 pb-1">
              <h3 className="text-xl font-semibold mb-2">Delete Project</h3>
              <p>
                The project will be permanently deleted, including its
                deployments and domains. This action is irreversible and can not
                be undone.
              </p>
              <div className="flex my-4 gap-2 items-start">
                <Image src="/next.jpg" alt="Image" width={150} height={150} />
                <div className="flex flex-col">
                  <span>next-js-blog-website</span>
                  <span>Last updated 58d ago</span>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-gray-100 p-3">
              <button className="px-4 py-1 rounded=full first-letter:border-2 border-white bg-red-600 text-white opacity-80 cursor-text ml-auto">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
