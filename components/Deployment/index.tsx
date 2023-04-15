import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiGlobalLine } from "react-icons/ri";
import { BiGitBranch } from "react-icons/bi";
import { BsLink, BsChevronRight } from "react-icons/bs";

const Deployment = () => {
  return (
    <section className="flex flex-col container-1200 mx-auto">
      {/* Deployment */}
      <div className="flex items-center gap-6 my-8 ">
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
          {/* Status */}
          <div className="my-6 flex justify-between items-center pr-4">
            <div className="flex flex-col">
              <h4>STATUS</h4>
              <span className="font-semibold">Ready</span>
            </div>
            <div className="flex flex-col">
              <h4 className="text-xs">ENVIROMENT</h4>
              <span className="font-semibold">Production</span>
            </div>
            <div className="flex flex-col">
              <h4 className="text-xs">CREATED</h4>
              <span className="font-semibold">55d ago</span>
            </div>
            <button className="font-medium px-20 py-2 cursor-pointer bg-black text-white rounded-lg border-2 transition-all hover:border-black hover:bg-white hover:text-black">
              Visit
            </button>
          </div>
          {/* Domains */}
          <div className="my-6">
            <h4 className="text-xs">DOMAINS</h4>
            <div className="flex items-center gap-2">
              <RiGlobalLine />
              <a
                className="font-semibold"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                mm360.nextlabwebsite.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <BiGitBranch />
              <a
                className="font-semibold"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                next-labs-dashboard=git-main-apttechsols.vercel.app
              </a>
            </div>
            <div className="flex items-center gap-2">
              <BsLink />
              <a
                className="font-semibold"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                next-labs-dashboard-sljkdfl-apttechsols.vercel.app
              </a>
            </div>
          </div>
          {/* Source */}
          <div className="my-4 flex flex-col">
            <h4 className="text-xs">SOURCE</h4>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <BiGitBranch size={20} />
                <a
                  className="font-medium transition-all hover:font-semibold"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  main
                </a>
              </div>
              <div className="flex items-center gap-2">
                <BsLink size={20} />
                <a
                  className="font-medium text-sm transition-all hover:font-semibold"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Last Commit Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Bar */}
      <div className="relative">
        <hr className="absolute -left-full border-1 border-gray-400 w-full" />
        <hr className="absolute left-0 border-1 border-gray-400 w-screen" />
      </div>

      {/* Status */}
      <div className="my-8">
        <div className=" mb-4 flex justify-between items-center p-2 ">
          <h2 className="text-xl font-bold  ">Deployment Status</h2>
          <button className="transition-all font-normal py-1 px-4 cursor-pointer  rounded-lg border-2  hover:border-black hover:font-medium">
            Expand All
          </button>
        </div>

        {/* Building Section*/}
        <div className="flex flex-col ">
          {/* Logs Button */}
          <div className="border-2 border-gray-200  flex justify-between items-center p-3 cursor-pointer">
            <div className="flex items-center gap-2">
              <BsChevronRight size={20} />
              <span>Building</span>
            </div>
            <div className="flex items-center gap-2 transition-all font-normal py-1 px-2 cursor-pointer bg-white rounded-lg border-2  hover:border-black hover:font-medium">
              <span>25s</span>
              <AiFillCheckCircle size={20} />
            </div>
          </div>
          {/* Logs Section */}
          <div className="bg-gray-50 flex flex-col">
            {/* Logs Buttons */}
            <div className="text-xs m-2 flex items-center gap-2">
              <button className="font-medium px-8 py-1 rounded-full cursor-pointer bg-black text-white border-2 transition-all hover:border-black hover:bg-white hover:text-black">
                All logs(20)
              </button>
              <button className="font-medium px-8 py-1 rounded-full cursor-pointer bg-black text-white border-2 transition-all hover:border-black hover:bg-white hover:text-black">
                Errors(0)
              </button>
              <button className="font-medium px-8 py-1 rounded-full cursor-pointer bg-black text-white border-2 transition-all hover:border-black hover:bg-white hover:text-black">
                Warnings(0)
              </button>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-2 p-4 text-sm">
              <div className="flex items-center gap-5">
                <span className="cursor-pointer">02:43:34:234</span>
                <span>Running build in Cleveland, USA (East) – cle1</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="cursor-pointer">02:43:34:250</span>
                <span>
                  Cloning github.com/Bit1100/NextJs_Blog_Website (Branch: main,
                </span>
              </div>
              <div className="flex items-center gap-5">
                <span className="cursor-pointer">02:43:34:275</span>
                <span>Cloning completed: 379.747ms Running</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="cursor-pointer">02:43:34:297</span>
                <span> Vercel CLI 28.15.7</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="cursor-pointer">02:43:35:234</span>
                <span>Installing dependencies.</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="cursor-pointer">02:43:36:234</span>
                <span>.</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="cursor-pointer">02:43:38:234</span>
                <span>up to date in 751ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Running Checks */}
        <div className="flex flex-col">
          <div className="border-2 border-gray-200  flex justify-between items-center p-3 cursor-pointer">
            {/* left */}
            <div className="flex items-center gap-2">
              <BsChevronRight size={20} />
              <span>Running Checks</span>
            </div>
            {/* Right */}
            <div className="flex items-center gap-2 transition-all font-normal py-1 px-2 cursor-pointer bg-white rounded-lg border-2  hover:border-black hover:font-medium">
              <span></span>
              {/* <AiFillCheckCircle size={20} /> */}
            </div>
          </div>
          {/* Checks */}
          <div className="bg-gray-50 p-12">
            <div className="flex flex-col justify-center items-center gap-6 w-2/5 mx-auto text-sm">
              <Image src="/favicon.ico" alt="icon" width={40} height={40} />
              <h2 className="text-lg font-medium">
                Perform Checks on your Deployments
              </h2>
              <p className="text-center">
                Checks let you validate your Deployments before they are made
                available to visitors. This allows you to ensure that only fast
                and reliable updates to your Project make it into Production,
                for example.
              </p>
              <div className="flex items-center gap-4 ">
                <button className="font-medium px-4 py-2 cursor-pointer bg-black text-white rounded-lg border-2 transition-all hover:border-black hover:bg-white hover:text-black">
                  Add Checkly Integration
                </button>
                <button className="transition-all font-normal py-2 px-4 cursor-pointer  rounded-lg border-2  hover:border-black hover:font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Domains Section */}
        <div className="flex flex-col">
          {/* Domains */}
          <div className="border-2 border-gray-200  flex justify-between items-center p-3 cursor-pointer">
            <div className="flex items-center gap-2">
              <BsChevronRight size={20} />
              <span>Assigning Domains</span>
            </div>
            <div className="flex items-center gap-2 transition-all font-normal py-1 px-2 cursor-pointer bg-white rounded-lg border-2  hover:border-black hover:font-medium">
              <span>20s</span>
              <AiFillCheckCircle size={20} />
            </div>
          </div>
          {/* Domains */}
          <div className="flex flex-col text-sm">
            <div className="border-2 border-gray-200 flex justify-between items-center p-1.5 gap-2 ">
              <AiFillCheckCircle size={20} />
              <a href="" target="_blank" rel="noopener noreferrer">
                next-js-blog-website-bit1100.vercel.app
              </a>
              <span>· Automatic URL</span>
              <a
                className="ml-auto hover:font-medium"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
            <div className="border-2 border-gray-200 flex  items-center p-1.5 gap-2">
              <AiFillCheckCircle size={20} />
              <a href="#" target="_blank" rel="noopener noreferrer">
                next-js-blog-website-bit1100.vercel.app
              </a>
              <span>· Automatic URL</span>
              <a
                className="ml-auto hover:font-medium"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
            <div className="border-2 border-gray-200 flex justify-between items-center p-1.5 gap-2 ">
              <AiFillCheckCircle size={20} />
              <a href="" target="_blank" rel="noopener noreferrer">
                next-js-blog-website-bit1100.vercel.app
              </a>
              <span>· Automatic URL</span>
              <a
                className="ml-auto hover:font-medium"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deployment;
