import { filter, svg } from "motion/react-client";
import React, { useState } from "react";
import { easeInOut, motion, stagger } from "motion/react";
import { FaJava } from "react-icons/fa";
import {
  SiReact,
  SiPython,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiGithub,
  SiGit,
  SiFigma,
  SiBootstrap,
} from "react-icons/si";

function Skills() {
  const [hovered, setHovered] = useState(-1);
  const icons = [
    {
      lang: "Java",
      icon: FaJava,
      color: "#3fcee7",
    },
    {
      lang: "Python",
      icon: SiPython,
      color: "#3776AB",
    },
    {
      lang: "HTML5",
      icon: SiHtml5,
      color: "#e34f26",
    },
    {
      lang: "CSS",
      icon: SiCss,
      color: "#663399",
    },
    {
      lang: "JS",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      lang: "React",
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      lang: "TailwindCSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
    },
    {
      lang: "Node",
      icon: SiNodedotjs,
      color: "#5FA04E",
    },
    {
      lang: "Git",
      icon: SiGit,
      color: "#F03C2E",
    },
    {
      lang: "GitHub",
      icon: SiGithub,
      color: "#181717",
    },
    {
      lang: "Figma",
      icon: SiFigma,
      color: "#F24E1E",
    },
    {
      lang: "Bootstrap",
      icon: SiBootstrap,
      color: "#7952B3",
    },
  ];
  const pVar = {
    hidden: {},
    show: {},
  };
  const cVar = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: [-10, 0] },
  };
  return (
    <div id="skills" className="flex flex-col w-full px-5 md:px-20 xl:px-35">
      <div className="my-10">
        <h1 className="md:text-4xl text-2xl my-3">
          <b>My Tech Stack</b>
        </h1>
        <p className="text-[15px] text-neutral-500">
          The tools and technologies I enjoy building with.
        </p>
      </div>
      <motion.div
        variants={pVar}
        initial="hidden"
        whileInView="show"
        transition={{
          delay: 0.2,
          delayChildren: stagger(0.05, {
            startDelay: 0.3,
            from: "first",
            ease: easeInOut,
          }),
        }}
        className="flex flex-row flex-wrap md:gap-10 gap-7 items-center justify-center xl:px-15 md:px-10 px-5"
      >
        {icons.map((y, idx) => {
          const Icon = y.icon;
          return (
            <motion.div
              variants={cVar}
              key={idx}
              transition={{ duration: 0.1, ease: easeInOut }}
              className={
                hovered == idx
                  ? "xl:h-35 xl:w-35 md:h-30 md:w-30 h-15 w-15 flex flex-col items-center justify-center bg-neutral-200 rounded"
                  : "xl:h-35 xl:w-35 md:h-30 md:w-30 h-15 w-15 flex flex-col items-center justify-center"
              }
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(-1)}
            >
              <Icon className="h-20 w-20 mx-4" />
              {hovered == idx && <p>{y.lang}</p>}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Skills;
