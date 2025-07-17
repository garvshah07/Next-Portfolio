"use client";

import React from "react";
import ScrollVelocity from "@/block/TextAnimations/ScrollVelocity/ScrollVelocity";

const About = () => {
  return (
    <section id="about">
      <div>
        <ScrollVelocity
          texts={["ABOUT ME", "ABOUT ME"]}
          velocity={30}
          className="custom-scroll-text"
        />
      </div>
      <div className="flex justify-center items-left m-auto gap-4  flex-col py-20 px-4  max-w-[900px] text-justify">
        <h4 className="text-white text-lg font-normal  ">
          Hi! I’m professional Web Developer dedicated to building modern,
          high-performance web applications. I specialize in creating fast,
          responsive, and user-friendly websites using Next.js, React.js,
          JavaScript, and modern web technologies.
        </h4>
        <h4 className="text-white text-lg font-normal   ">
          I’m passionate about delivering clean code, intuitive design, and
          exceptional user experiences.
        </h4>
        <h4 className="text-white text-lg font-normal  ">
          With nine months of experience in web development, I have worked on
          projects ranging from dynamic single-page applications to fully
          featured server-side rendered websites.
        </h4>
        <h4 className="text-white text-lg font-normal  ">
          My core skills include: Next.js for server-side rendering and static
          site generation React for component-based UI development JavaScript
          ES6+ and modern frontend tooling Responsive design and accessibility
          best practices API integration and backend communication I’m always
          learning and adopting the latest web development trends to ensure the
          solutions I build are modern, maintainable, and optimized for
          performance and SEO.
        </h4>
        <h4 className="text-white text-lg font-normal   ">
          When I’m not coding, you’ll often find me reading about new
          technologies / designing UI concepts / working on personal projects /
          enjoying playing cricket.
        </h4>
        <h4 className="text-white text-lg font-normal   ">
          I’m currently available for freelance work / open to new opportunities
          / focused on growing my skills. If you’re looking for a reliable,
          creative Next.js and React Developer to help bring your ideas to life,
          let’s connect!
        </h4>
      </div>
    </section>
  );
};

export default About;
