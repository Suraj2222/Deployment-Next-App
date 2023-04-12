import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import clsx from "clsx";

const Project = () => {
  const [hovering, setHovering] = useState(null);

  const updateUrl = (url) => {
    const updatedUrl = url.slice(8, url.length - 1);

    return updatedUrl;
  };

  return (
    <div className="flex justify-center items-center flex-wrap">
      {projects?.map(
        ({ id, title, url, lastCommitMsg, branch, duration, gitPlatform }) => (
          <Link key={id} href={`/user/${id}`}>
            <div
              onMouseEnter={() => setHovering(id)}
              onMouseLeave={() => setHovering(null)}
              className="relative rounded-lg cursor-pointer  max-w-80 w-80 h-48 border-2 border-gray-200 my-4 mx-2 p-4 hover:border-black shadow-sm hover:shadow-md"
            >
              {/* top */}
              <div className="flex items-center gap-4 my-2">
                <Image src="/favicon.ico" alt="Logo" width={35} height={35} />
                <div className="w-3/4 text-sm flex flex-col ">
                  <h2 className="font-medium">{title}</h2>
                  <h3 className="overflow-hidden whitespace-nowrap text-ellipsis">
                    {updateUrl(url)}
                  </h3>
                </div>
                <TbBrandNextjs className="ml-auto" size={25} />
              </div>
              {/* Middle */}
              <div className="text-sm flex flex-col my-3">
                <span>{lastCommitMsg}</span>
                <span>
                  From <span className="font-semibold">{branch}</span>
                </span>
              </div>
              {/* Bottom */}
              <div className="flex items-center gap-3">
                <span>{duration} ago via</span>
                <AiOutlineGithub size={20} />
              </div>
              {/* url */}
              <div
                className={clsx(
                  "absolute -top-4 -right-2 rounded-full bg-black p-2 transition-all",
                  hovering == id ? "visible" : "invisible opacity-0"
                )}
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white" size={15} />
                </a>
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default Project;
