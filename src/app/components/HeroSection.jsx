"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from "./LanguageContext";

const errors = {
  CVLoad: {
    EN:"Cannot load Sacha's CV 😞 ...",
    FR:"Impossible de charger le CV de Sacha 😞 ..."
  }
}

const textDescription = {
  dynamicSequence: {
    EN: {
      name: "Sacha",
      job: "Data Engineer",
      mountain: "mountain man",
    },
    FR: {
      name: "Sacha",
      job: "Ingénieur de données",
      mountain: "montagnard",
    }
  },
  headerTitle: {
    EN: "Data Engineer with a passion for the mountains",
    FR: "Ingénieur de données passionné par la montagne"
  },
  description : {
    EN: (<text>I&apos;m Sacha, a dedicated data engineer on a mission to scale new heights, both in the datas and heights peaks. By day, I&apos;m helping <a target="_blank" href="https://www.la-forge.ai/" className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">La Forge</a> navigate the data currents. 
    By weekends, you&apos;ll find me conquering mountain peaks and exploring the world from a different perspective.</text>),
    FR: <text>Je suis Sacha, un ingénieur de données engagé, en quête de nouveaux sommets, tant dans le domaine des données que dans l&apos;ascension des plus hautes montagnes. La semaine, j&apos;aide <a target="_blank"
    href="https://www.la-forge.ai/" className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">La Forge</a> à traiter, structurer et agréger les données. Les week-ends, vous me trouverez
     en train de conquérir des sommets montagneux et d&apos;observer le monde sous un angle différent.</text>
  },
  contact : {
    EN: "Contact me",
    FR: "Me contacter"
  },
  CV: {
    EN: "Download my CV",
    FR: "Télécharger mon CV"
  }
}




const HeroSection = () => {
  const {language} = useLanguage()
  const dlFile = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/dl/resume/'+language);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'CV Sacha Choumiloff.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      toast.error(errors.CVLoad[language])
    }
  }

  return (
    <section className="">
      <div className="">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {language === "EN" ? "Hello, I'm " : "Bonjour, je suis"}
              
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                textDescription.dynamicSequence[language].name,
                1000,
                textDescription.dynamicSequence[language].job,
                1000,
                textDescription.dynamicSequence[language].mountain,
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              key={language}
            />
          </h1>
          <p className="text-[#ADB7BE] text-1xl sm:text-lg mb-6 lg:text-2xl font-bold">{textDescription.headerTitle[language]}</p>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          
           {textDescription.description[language]}
          </p>
          <div>
            <Link
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 text-center bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              {textDescription.contact[language]}
            </Link>
            <button
            onClick={dlFile}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              {textDescription.CV[language]}
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        </motion.div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default HeroSection;
