"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "RTI-Exploration",
    description: "AI solution for detecting deep aquifers from NASA satellite Images",
    image: "/images/projects/RTI-Exploration.jpg",
    tag: ["All", "AI", "Data"],
    gitUrl: "https://www.rtiexploration.com/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Vertigo lab",
    description: "Development of a datas aggregation platform for measuring the socio-economic and environmental impacts of companies.",
    image: "/images/projects/vertigolab.jpg",
    tag: ["All", "Data"],
    gitUrl: "https://vertigolab.eu/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Mieux",
    description: "Development of a health platform using AI to monitor the health of beneficiaries in a personalized way.",
    image: "/images/projects/logo.svg",
    tag: ["All", "Data", "AI"],
    gitUrl: "https://mieux.health/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Trading assistant",
    description: "Assistant who help for detects trading patterns and backtest trading strategies (based on more than 100 technicals indicators) on crypto currencies",
    image: "/images/projects/trading.png",
    tag: ["All", "AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "data"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
