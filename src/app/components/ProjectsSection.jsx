"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const projectsData = [
  {
    id: 1,
    title: "RTI-Exploration",
    description: {
      EN: "AI solution for detecting deep aquifers from NASA satellite images",
      FR: "Solution d'IA permettant à partir des images satellite de détecter des aquifères profond."
    },
    image: "/images/projects/RTI-Exploration.jpg",
    tag: ["All", "AI", "Data"],
    gitUrl: "https://www.rtiexploration.com/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Vertigo lab",
    description: {
      EN: "Development of a data aggregation platform for measuring the socio-economic and environmental impacts of companies.",
      FR: "Développement d'une solution d'aggregation de données pour mesurer les impacts socio-économique en environnemental d'un société"
    },
    image: "/images/projects/vertigolab.jpg",
    tag: ["All", "Data"],
    gitUrl: "https://vertigolab.eu/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Mieux",
    description: {
      EN: "Development of a health platform using AI to monitor the health of beneficiaries in a personalized way.",
      FR: "Développement d'une plateforme de santé utilisant l'IA pour suivre et mésurer l'état de santé d'une personne de manière personnalisé."
    },
    image: "/images/projects/logo.svg",
    tag: ["All", "Data", "AI"],
    gitUrl: "https://mieux.health/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Tracer",
    description: {
      EN: "Project with the purpose of detect, classify and identify burried works, we have developed an reality augmented app using AI to help enedis agents in there daily tasks. I was tasked with leading the R&D efforts, annotating, training, and deploying the deep learning mode.",     
      FR: "Avec pour objectif de détecter, classer et identifier les ouvrages enterrés, nous avons développé une application de réalité augmentée utilisant l'IA pour aider les agents d'Enedis dans leurs tâches quotidiennes. J'ai été chargé de diriger les efforts de R&D, d'annoter, d'entraîner et de déployer le modèle d'apprentissage profond"
    },
    image: "",
    tag: ["All", "AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 22,
    title: "Jvpdt",
    description: {
      EN: "A platform that allows for the sharing and writing of historical articles.",     
      FR: "Plateforme permettant de partager et rédiger des articles historiques."
    },
    image: "/images/projects/pochette.jpg",
    tag: ["All", "Development"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 21,
    title: "My portfolio",
    description: {
      EN: "Building my online porfolio using nextjs and nestjs frameworks.",
      FR: "Création de mon CV digital en utilisant les frameworks nextjs et nestjs. ",
    },
    image: "/images/projects/next-js.svg",
    tag: ["All", "Development"],
    gitUrl: "https://github.com/SChoumiloff/nextjs-portfolio",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Trading assistant",
    description: {
      EN: "Assistant who helps to detect trading patterns and backtests trading strategies (based on more than 100 technical indicators) on crypto currencies",
      FR: "Agent permettant la détection de patternes et de backtester des stratégies de trading (basé sur plus de 100 indicateurs techniques). "
    },
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

  const {language} = useLanguage()

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
        <ProjectTag
          onClick={handleTagChange}
          name="Development"
          isSelected={tag === "Development"}
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
              description={project.description[language]}
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
