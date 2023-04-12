import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";

const Project = () => {
  const router = useRouter();
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    const { id } = router.query;
    setProjectName(id);
  }, []);

  return (
    <section className="flex flex-col container-1200 mx-auto">
      {/* Project Links */}
      <div className="my-10  flex justify-between items-center">
        {/* Project Name */}
        <div className="flex items-center flex-1">
          <h2 className="text-3xl font-semibold">{projectName}</h2>
        </div>

        {/* Links */}
        <div className="rounded-md ml-3 flex items-cebter mx-2 border-2 border-gray-50 gap-5">
          <button className="transition-all font-normal p-2.5 cursor-pointer bg-gray-50 rounded-lg border-2  hover:border-black hover:font-medium">
            View Github Repository
          </button>
          <button className="font-medium px-6 py-2 cursor-pointer bg-black text-white rounded-lg border-2 transition-all hover:border-black hover:bg-white hover:text-black">
            Visit
          </button>
        </div>
      </div>

      {/* View Logs */}
      <div className="flex justify-between items-start my-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">Production Deployment</h3>
          <span>The deployment that is available to your visitors.</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="transition-all font-normal py-1 px-2 cursor-pointer bg-gray-50 rounded-lg border-2  hover:border-black hover:font-medium">
            View Build Logs
          </button>
          <button className="transition-all font-normal py-1 px-2 cursor-pointer bg-gray-50 rounded-lg border-2  hover:border-black hover:font-medium">
            View Runtime Logs
          </button>
          <button className="transition-all font-normal py-1 px-2 cursor-pointer bg-gray-50 rounded-lg border-2  hover:border-black hover:font-medium">
            View Domains
          </button>
        </div>
      </div>

      {/* Demo */}
      <div className="flex items-center gap-6 my-8 bg-gray-50 py-4 border-2 border-gray-200">
        <div className="basis-2/5 p-4 ">
          <Image
            src="/ecommerce.jpg"
            alt="Website Demo"
            width={100}
            height={100}
            className="transition-all cursor-pointer rounded-lg w-full h-72 hover:opacity-80"
          />
        </div>
        <div className="basis-3/5 text-sm gap-6">
          <div className="my-6">
            <h4 className="text-xs">DEPLOYMENT</h4>
            <Link className="font-semibold" href="#">
              next-js-blog-website-4s69pv4y2-bit1100.vercel.app
            </Link>
          </div>
          <div className="my-6">
            <h4 className="text-xs">DOMAINS</h4>
            <a
              className="font-semibold"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              {projectName}
            </a>
          </div>
          <div className="my-4 flex items-center gap-6">
            <div className="flex flex-col">
              <h4 className="text-xs">STATUS</h4>
              <span className="font-semibold">Ready</span>
            </div>
            <div className="flex flex-col">
              <h4 className="text-xs">CREATED</h4>
              <span className="font-semibold">55d ago by username</span>
            </div>
          </div>
          <div className="my-4 flex flex-col gap-1">
            <h4 className="text-xs">BRANCH</h4>
            <div className="flex items-center gap-2">
              <TbBrandGithub size={20} />
              <a
                className="font-semibold"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                main
              </a>
            </div>
            <a
              className="font-medium text-sm"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Last Commit Message
            </a>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="border-2 border-gray-200 bg-gray-100 flex justify-between items-center p-4 my-2 mb-8">
        <span className="text-sm">
          To update your Production Deployment, push to the "main" branch.
        </span>
        <button className="transition-all font-normal py-1 px-2 cursor-pointer bg-white rounded-lg border-2  hover:border-black hover:font-medium">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Project;
