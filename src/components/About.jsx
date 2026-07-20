import React, { useRef } from "react";
import about from "../assets/about.png";
import { motion, AnimatePresence, easeInOut, stagger } from "motion/react";

function About({ showHero }) {
  const parent = {
    hidden: {},
    show: {},
  };

  const child = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <div className="bg-neutral-800 p-2 lg:h-[85vh] h-[85vh] sm:h-[65vh] w-full flex md:flex-row flex-col items-center justify-center mb-15">
      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="show"
        transition={{
          delay: 0.1,
          ease: easeInOut,
          delayChildren: stagger(0.3, { from: "first", ease: "easeOut" }),
        }}
        className="flex flex-col items-start md:w-3/5 w-full md:px-15 xl:px-35 px-5 text-neutral-100"
      >
        <motion.h1 variants={child} className="lg:text-4xl md:text-3xl text-2xl lg:my-10 md:my-7 sm:my-10 my-7">
          <b>Professional Overview</b>
        </motion.h1>
        <motion.p variants={child} className="lg:text-xl">
          I'm <b className="text-[#73d6ff]">Sahasra</b>, a Computer Science
          student at <b className="text-[#73d6ff]">IIIT Sri City</b> with a
          passion for building modern, responsive, and user-centric web
          applications. I enjoy transforming ideas into clean and interactive
          digital experiences using{" "}
          <b className="text-[#73d6ff]">
            React, JavaScript, Tailwind CSS, Node.js, and MongoDB
          </b>
          . Beyond web development, I'm actively exploring{" "}
          <b className="text-[#73d6ff]">
            {" "}
            AI and ML
          </b>
          , applying analytical thinking and problem-solving skills to
          real-world projects. I believe in continuous learning and enjoy
          challenging myself with new technologies. I'm currently seeking opportunities where I
          can contribute to meaningful products, collaborate with experienced
          developers, and continue growing as a software engineer.
        </motion.p>
      </motion.div>
      <div className="w-2/5 lg:pr-20 pr-10 hidden md:block">
        <AnimatePresence>
          {!showHero && (
            <motion.img
              transition={{ duration: 0.5, ease: easeInOut }}
              src={about}
              alt=""
              layoutId="about_img"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default About;
