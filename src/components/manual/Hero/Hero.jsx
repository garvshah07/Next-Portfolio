"use client";

import React from "react";
import { BackgroundBeams } from "../../ui/background-beams";
import { WordRotate } from "../../magicui/word-rotate";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="max-w-[768px] m-auto z-50 flex flex-col items-center justify-center h-screen text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm Garv Shah
        </h1>

        <WordRotate
          className="text-lg z-50 md:text-2xl text-gray-300 mb-8"
          words={["Frontend Developer", "Web Developer"]}
        />

        <div className="flex z-50 justify-between gap-4 items-center border px-4 py-2 border-gray-300 rounded-full mt-2">
          <Link href={"https://github.com/garvshah07"}>
            <FaGithub
              size={22}
              color="white"
              className="transition-transform duration-300 ease-in-out hover:scale-125"
              cursor={"pointer"}
            />
          </Link>
          <Link href={"https://www.instagram.com/grv.sh7"}>
            <FaInstagram
              size={22}
              color="white"
              className="transition-transform duration-300 ease-in-out hover:scale-125"
              cursor={"pointer"}
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/shahgarv"}>
            <FaLinkedin
              size={22}
              color="white"
              className="transition-transform duration-300 ease-in-out hover:scale-125"
              cursor={"pointer"}
            />
          </Link>
        </div>

        <BackgroundBeams />
      </div>
    </section>
  );
};

export default Hero;
