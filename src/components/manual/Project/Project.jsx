"use client";
import React from "react";
import { PinContainer } from "../../ui/3d-pin";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    projectImageUrl: "/images/card-project/card.jpg",
    projectTitle: "Project Name",
    description: "",
  },
  {
    id: 2,
    projectImageUrl: "/images/card-project/card.jpg",
    projectTitle: "Project Name",
    description: "",
  },
  {
    id: 3,
    projectImageUrl: "/images/card-project/card.jpg",
    projectTitle: "Project Name",
    description: "",
  },
  {
    id: 4,
    projectImageUrl: "/images/card-project/card.jpg",
    projectTitle: "Project Name",
    description: "",
  },
  {
    id: 5,
    projectImageUrl: "/images/card-project/card.jpg",
    projectTitle: "Project Name",
    description: "",
  },
  {
    id: 6,
    projectImageUrl: "/images/card-project/card.jpg",
    projectTitle: "Project Name",
    description: "",
  },
];

const Project = () => {
  return (
    <section id="projects">
      <div className="pt-20">
        <h4 className="text-5xl text-center font-semibold text-white ">
          Project
        </h4>
      </div>

      <div className="overflow-hidden W-[250px] py-20 w-full grid grid-cols-1 md:grid-cols-3 gap-y-[50px]  items-center justify-center">
        {cardData.map((project) => {
          return (
            <PinContainer key={project.id} title="Come Soon" href="Soon">
              <div className="w-[200px]  flex justify-center items-center flex-col  rounded-md">
                <Image
                  src={project.projectImageUrl}
                  width={200}
                  height={80}
                  className="rounded-md"
                  alt="image"
                  objectFit="cover"
                />
                <div className="mt-2">
                  <span className="text-white text-base font-medium">
                    {project.projectTitle}
                  </span>
                </div>
              </div>
            </PinContainer>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
