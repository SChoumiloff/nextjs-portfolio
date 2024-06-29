"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section>
      <div className="container mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-primary text-left mb-4 text-2xl sm:text-4xl lg:text-8xl lg:leading-normal font-extrabold">
            Hello, I&apos;m
            <br></br>
            <TypeAnimation
              sequence={[
                "Sacha",
                1000,
                "Data engineer",
                1000,
                "Moutain man",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="dark:text-secondary text-secondary-foreground text-1xl sm:text-lg mb-6 lg:text-2xl font-bold">
            Data Engineer with a passion for the mountains
          </p>
          <p className="text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m Sacha, a dedicated data engineer on a mission to scale new
            heights, both in the datas and heights peaks. By day, I'm helping La
            Forge navigate the data currents. By weekends, you'll find me
            conquering mountain peaks and exploring the world from a different
            perspective.
          </p>

          <div className="flex flex-col space-y-4 items-center sm:space-x-4 sm:space-y-0 sm:flex-row">
            <Button variant={"foreground"} className="w-48 py-2 px-4">Get in touch</Button>
            <Button className="w-48 py-2 px-4">CV</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}