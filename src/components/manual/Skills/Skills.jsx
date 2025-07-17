"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import GradientText from "@/block/TextAnimations/GradientText/GradientText";

const techStack = [
  { id: 1, imgUrl: "/images/skills-logo/Html5.svg", name: "HTML" },
  { id: 2, imgUrl: "/images/skills-logo/CSS3.svg", name: "CSS" },
  { id: 3, imgUrl: "/images/skills-logo/TailwindCSS.svg", name: "TAILWIND" },
  { id: 4, imgUrl: "/images/skills-logo/JavaScript.svg", name: "JAVASCRIPT" },
  { id: 5, imgUrl: "/images/skills-logo/React.svg", name: "REACT" },
  { id: 6, imgUrl: "/images/skills-logo/Next.js.svg", name: "NEXT" },
  { id: 7, imgUrl: "/images/skills-logo/Node.js.svg", name: "NODE" },
  {
    id: 8,
    imgUrl: "/images/skills-logo/Express.svg",
    color: "white",
    name: "EXPRESS",
  },
  { id: 9, imgUrl: "/images/skills-logo/MongoDB.svg", name: "MONGODB" },
  { id: 10, imgUrl: "/images/skills-logo/GIT.svg", name: "GIT" },
  { id: 11, imgUrl: "/images/skills-logo/GitHub.svg", name: "GITHUB" },
];

const Skills = () => {
  return (
    <div className="py-10">
      <div className="flex justify-center items-center pb-20">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-4xl text-center md:text-5xl font-semibold text-white"
        >
          What I Use to Build Stuff
        </GradientText>
      </div>
      <div>
        <Marquee speed={20} autoFill pauseOnHover>
          {techStack.map((logo) => {
            return (
              <div
                key={logo.id}
                className="flex justify-center items-center flex-col text-center text-white mx-4 py-2 px-4 bg-white/10 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md border-[0.5px] border-gray-700 "
              >
                <Image
                  src={logo.imgUrl}
                  alt={logo.name}
                  width={60}
                  height={60}
                  className="mb-2 "
                />
                <span className="text-xs">{logo.name}</span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
