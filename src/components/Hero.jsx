import React from "react";
import { easeInOut, motion } from "motion/react";
import Laptop from "./Laptop";
import img from "../assets/mouse.png";
import { useScroll } from "@react-three/drei";

function Hero({ showHero }) {
  return (
    <motion.div id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" flex md:flex-row flex-col w-full h-[85vh] md:gap-4 gap-15 items-center justify-center"
    >
      <motion.div className="flex flex-col items-left justify-center md:w-1/2 xl:pl-50 lg:pl-25 md:pl-20 pl-15">
        <p className="lg:text-6xl md:text-5xl text-4xl text-left mb-4">Hello, There!</p>
        <p className="lg:text-5xl md:text-3xl text-3xl mt-2 mb-4">
          I'm <b className="text-[#17a9e5] tracking-tight">Sahasra Gubba</b>
        </p>
        <p className="text-3xs md:text-2xs text-neutral-700">
          I love crafting responsive, interactive, and user-focused web
          experiences with React and modern JavaScript.
        </p>
      </motion.div>
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
        className="w-1/2 flex items-center justify-center gap-8"
      >
        <Laptop showHero={showHero} />
        <img src={img} alt="" className="h-13 rotate-z-90 mt-50 md:block hidden" />
      </motion.div>
    </motion.div>
  );
}

export default Hero;
