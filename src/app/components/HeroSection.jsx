"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeroSection = () => {
  const dlFile = async () => {
    try {
      const response = await fetch('https://api.dataelevation.dev/api/dl/resume');
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
      toast.error("Cannot load Sacha's CV 😞 ...")
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
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sacha",
                1000,
                "Data Engineer",
                1000,
                "mountain lover",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-1xl sm:text-lg mb-6 lg:text-2xl font-bold">Data Engineer with a passion for the mountains</p>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          
            I&apos;m Sacha, a dedicated data engineer on a mission to scale new heights, both in the datas and heights peaks. By day, I&apos;m helping <a target="_blank" href="https://www.la-forge.ai/" className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">La Forge</a> navigate the data currents. 
            By weekends, you&apos;ll find me conquering mountain peaks and exploring the world from a different perspective.
          </p>
          <div>
            <Link
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 text-center bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Contact Me
            </Link>
            <button
            onClick={dlFile}
              // href="https://api.dataelevation.dev/api/dl/resume"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download my CV
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
