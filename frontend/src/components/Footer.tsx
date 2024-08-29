import { CircuitBoard, Copyright } from "lucide-react";
import React from "react";

type FooterSection = {
  title: string;
  links: string[];
};

const footerData: FooterSection[] = [
  {
    title: "Abstract",
    links: ["Branches"],
  },
  {
    title: "Resources",
    links: ["Blog", "Help Center", "Release Notes", "Status"],
  },
  {
    title: "Community",
    links: ["Twitter", "LinkedIn", "Facebook", "Dribbble", "Podcast"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Legal"],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="  px-20 bg-black text-white py-6 mt-auto">
      <div className=" h-[30vh] container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
        {footerData.map((section, index) => (
          <div key={index}>
            <h4 className="font-bold mb-2  text-lg ">{section.title}</h4>
            {section.links.map((link, linkIndex) => (
              <a className=" cursor-pointer block" key={linkIndex}>
                {link}
              </a>
            ))}
          </div>
        ))}
        <div className=" flex flex-col justify-end">
          <div className=" flex flex-col gap-1">
            <CircuitBoard />
            <div className=" flex items-center gap-2">
              <Copyright size={15} />
              Copyright 2024
            </div>

            <h1 className=" font-semibold text-md">
              Abstract Studio Design,Inc.
            </h1>
            <h1 className=" font-semibold text-md"> All rights reserved</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};
