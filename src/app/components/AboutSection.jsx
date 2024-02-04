"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";  
import Carousel from "./Carousel";
import { useLanguage } from "./LanguageContext";




const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = {
    EN:[
      {
        title: "Skills ⚒️",
        id: "skills",
        content: (
          <ul className="list-none">
            <li>- Python</li>
            <li>- Postgres</li>
            <li>- NestJs</li>
            <li>- Algorithms</li>
            <li>- Big data structures</li>
            <li>- Prompt engineering</li>
            <li>- LLMs ops</li>
          </ul>
        ),
      },
      {
        title: "Education 🏫",
        id: "education",
        content: (
          <ul className="list-none">
            <li>- AI & databases master, university of burgundy, Dijon</li>
            <li>- Mathematics degree, university via domitia, Perpignan</li>
          </ul>
        ),
      },
      {
        title: "Hobbies 🏫",
        id: "hobbies",
        content: (
          <ul className="list-none">
            <li>- Ski touring</li>
            <li>- Hiking / mountaineering / climbing</li>
            <li>- Guitar</li>
            <li>- Discover the world</li>
          </ul>
        ),
      },
      {
        title: "Athletic career",
        id: "athletic",
        content: (
        <div id="athletic-career">
          <p className="py-3">As a former high-performance swimmer, I dedicated three remarkable years to the high level sporting center of <a href="https://cnea-fontromeu.fr/en/" className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600" target="_blank">Font Romeu</a>, proudly representing the colors of Club <a target="_blank" href="https://www.canet66natation.com/" className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Canet 66 Natation</a>. My sporting highlights include:</p>
          <ul>
            <li className="py-1">
                <p>- Young French Champion of the 400m Individual Medley - Short course (2018)</p>
            </li>
    
            <li className="py-1">
                <p>- Young vice-Champion of France of the 200m Butterfly - Short course (2018)</p>
            </li>
    
            <li className="py-1">
                <p>- Young vice-Champion of France of the 200m Butterfly - Long Course (2017)</p>
            </li>
          </ul>
        </div>
    
        ),
      }
    ], 
    FR: [
      {
        title: "Skills ⚒️",
        id: "skills",
        content: (
          <ul className="list-none">
            <li>- Python</li>
            <li>- Postgres</li>
            <li>- NestJs</li>
            <li>- Algorithms</li>
            <li>- Structure de données massives</li>
            <li>- Prompt engineering</li>
            <li>- LLMs ops</li>
          </ul>
        ),
      },
      {
        title: "Education 🏫",
        id: "education",
        content: (
          <ul className="list-none">
            <li>- Master Base de données et IA, université de Bourgogne, Dijon</li>
            <li>- Licence mathématiques et informatique, université via domitia, Perpignan</li>
          </ul>
        ),
      },
      {
        title: "Centre d'intêret 🏫",
        id: "hobbies",
        content: (
          <ul className="list-none">
            <li>- Ski de randonnée</li>
            <li>- randonnée / alpinisme / escalade</li>
            <li>- Guitare</li>
            <li>- Voyager</li>
          </ul>
        ),
      },
      {
        title: "Athletic career",
        id: "athletic",
        content: (
        <div id="athletic-career">
          <p className="py-2">Nageur de haut niveau pendant 4 ans, au pôle france de <a href="https://cnea-fontromeu.fr/en/" className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600" target="_blank">Font Romeu</a>
          , j&apos;ai représenté avec fierté le club <a target="_blank" href="https://www.canet66natation.com/" className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Canet 66 Natation</a>. J&apos;ai notamment été: </p>
          <ul>
            <li className="py-1">
                <p>- Champion de france du 400 mètres 4 nages - petit bassin (2018)</p>
            </li>
    
            <li className="py-1">
                <p>- Vice champion de france du 200 mètres papillon  - petit bassin (2018)</p>
            </li>
    
            <li className="py-1">
                <p>- Vice champion de france du 200 mètres papillon - grand bassin (2017)</p>
            </li>
          </ul>
        </div>
        ),
      }
    ]
  }

  const description = {
    EN: `I am a data/AI backend engineer with a passion for creating products 
    on specified business expertise. I use AI to industrialize expertises 
    and increase the impacts. I have experience working with python, and 
    typescript to build backend microservices platforms. I am a quick
    learner and I love learning and developing my skills in new technologies.`,
    FR: `Je suis ingénieur backend en data/IA, passionné par la création de produits
    basés sur des expertises métier spécifiques. J'utilise l'IA pour industrialiser les
     savoir-faire et augmenter leur portée. J'ai de l'expérience dans l'utilisation de Python
     et de TypeScript pour développer des plateformes de microservices en backend. J'adore apprendre et développer mes compétences
     dans de nouvelles technologies.
    `
  }

  const {language} = useLanguage()

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div>
          <Carousel />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{language === "EN" ? 'About Me' : 'A propos'}</h2>  
          <p className="text-base lg:text-lg">
              {description[language]}
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
            <TabButton
              selectTab={() => handleTabChange("athletic")}
              active={tab === "athletic"}
            >
              {" "}
              Athletic career{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA[language].find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
