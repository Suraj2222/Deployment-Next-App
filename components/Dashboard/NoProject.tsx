import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNuxtdotjs, SiSvelte } from "react-icons/si";
import { useMemo } from "react";

const NoProject = () => {
  const cards = useMemo(
    () => [
      {
        imgSrc: "/next.jpg",
        altText: "Nextjs Image",
        title: "NextJs",
        icon: <TbBrandNextjs size={20} />,
      },
      {
        imgSrc: "/ecommerce.jpg",
        altText: "Nextjs Ecommerce Image",
        title: "NextJs Ecommerce",
        icon: <TbBrandNextjs size={20} />,
      },
      {
        imgSrc: "/nuxt.png",
        altText: "Nuxtjs Image",
        title: "NuxtJs",
        icon: <SiNuxtdotjs size={20} />,
      },
      {
        imgSrc: "/svelte.jpg",
        altText: "Svelte Image",
        title: "Svelte",
        icon: <SiSvelte size={20} />,
      },
    ],
    []
  );

  return (
    <div className="flex flex-col">
      <div className="h-40 flex flex-col justify-end items-center gap-2">
        <h2 className="text-2xl font-bold">No Projects, yet!</h2>
        <p>Create a project from the templates or import a git repository</p>
      </div>
      <div className="flex justify-center items-center flex-wrap my-12 gap-4">
        {cards?.map(({ imgSrc, altText, title, icon }) => (
          <div
            key={title}
            className="w-56 h-40 border-2 border-black flex flex-col rounded-lg shadow-lg"
          >
            <Image
              className="h-3/4"
              src={imgSrc}
              alt={altText}
              width={300}
              height={300}
            />
            <div className="font-semibold cursor-pointer bg-white h-1/4 border-t-2 border-black flex items-center pl-2 gap-2">
              {icon}
              <span>{title}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-5 my-4">
        <button className="py-3 px-6 bg-black text-white rounded-md cursor-pointer">
          Create a New Project
        </button>
        <button className="flex gap-4 py-3 px-6 bg-black text-white rounded-md cursor-pointer">
          Browse Templates{" "}
          <span>
            <AiOutlineArrowRight size={25} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NoProject;
