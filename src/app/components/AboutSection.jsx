"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";  
import Carousel from "./Carousel";


const TAB_DATA = [
  {
    title: "Skills ⚒️",
    id: "skills",
    content: (
      <ul className="list-none">
        <li>~ Python</li>
        <li>~ Postgres</li>
        <li>~ NestJs</li>
        <li>~ Algorithms</li>
        <li>~ Big data structures</li>
        <li>~ Prompt engineering</li>
        <li>~ LLMs ops</li>
      </ul>
    ),
  },
  {
    title: "Education 🏫",
    id: "education",
    content: (
      <ul className="list-none">
        <li>~ AI & databases master, university of burgundy, Dijon</li>
        <li>~ Mathematics degree, university via domitia, Perpignan</li>
      </ul>
    ),
  },
  {
    title: "Hobbies 🏫",
    id: "hobbies",
    content: (
      <ul className="list-none">
        <li>~ Ski touring</li>
        <li>~ Hiking / mountaineering / climbing</li>
        <li>~ Guitar</li>
        <li>~ Discover the world</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      {/* <iframe src='https://my.spline.design/miniroommusiccopy-ced00a59196bfe3deee13b62ec775545/' frameborder='0' width='100%' height='100%'></iframe> */}
        {/* <Image src="/images/about-image.png" alt="about" width={500} height={500} /> */}
        <div>
          <Carousel />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a data/AI backend developper with a passion for creating products 
            on specified business expertise. I use AI to industrialize expertises 
            and increase the impacts. I have experience working with python, and 
            typescript for building backend microservices platforms. I am a quick
            learner and I love learning and developing my skills on new technologies.  
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("hobbies")}
              active={tab === "hobbies"}
            >
              {" "}
              Hobbies{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
