import { div } from "motion/react-client";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { easeInOut, motion, stagger, AnimatePresence } from "motion/react";
import { delay } from "motion";

function Projects() {
  const [current, setCurrent] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  useEffect(() => {
    function updateCards() {
      if (window.innerWidth < 768) setCardsPerPage(1);
      else if (window.innerWidth < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    }
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);
  const myProjects = [
    {
      title: "AirDopes Website",
      content:
        "Developed a frontend-only Airdopes-inspired website using React and Tailwind CSS, featuring subtle animations and responsive UI components.",
      stack: "Node.js, Express.js, MongoDB, EJS",
      github: "https://github.com/Sahasra-iiits/AirDops_Website",
    },
    {
      title: "URL Shortener",
      content:
        "Built a full-stack REST API-driven URL shortener handling 500+ entries; automated redirection and tracked per-link click analytics in real time.",
      stack: "Node.js, Express.js, MongoDB, EJS",
      github: "https://github.com/Sahasra-iiits/URL_Shortener_",
    },
    {
      title: "Profile Card Generator",
      content:
        "Engineered a client-side profile card web app users to instantly generate and download shareable cards with zero server dependency.",
      stack: "HTML, CSS, JavaScript, VS code, html2canvas, download.js.",
      github: "https://github.com/Sahasra-iiits/Profile_Card_Generator",
    },
    {
      title: "Task Quest",
      content:
        "Gamified productivity tracker that helps users manage tasks while earning points based on task priority. Released in many versions on GitHub",
      stack: "ReactJs, Local Storage",
      github: "https://github.com/Sahasra-iiits/TaskQuest",
    },
    {
      title: "Basic House Rental Website",
      content:
        "My first website using technologies i learnt, a minimal house rental websites, which shows all rental properties",
      stack: "HTML, CSS, JS",
      github: "https://github.com/Sahasra-iiits/Basic-House-Rental-Website",
    },
    {
      title: "Depression Detection EEG-signals",
      content:
        "A 2-phase quiz app that is developed as a part of collecting EEG data for Depression Detection of students during exam.",
      stack: "ReactJs, NodeJS, ExpressJS",
      github:
        "https://github.com/Sahasra-iiits/Depression-detection-EEG-Signals",
      live: "",
    },
  ];

  function goLeft() {
    if (current > 0) {
      setCurrent((prev) => prev - cardsPerPage);
    }
  }
  function goRight() {
    if (current + cardsPerPage < myProjects.length) {
      setCurrent((prev) => prev + cardsPerPage);
    }
  }
  const parent = {
    hidden: {},
    show: {},
    exit: {},
  };
  const child = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 50,
    },
  };
  return (
    <div
      id="projects"
      className="md:pt-25 pt-15 px-5 md:px-20 xl:px-35 w-full flex flex-col justify-center"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3, ease: easeInOut }}
        className="flex flex-row justify-between items-center"
      >
        <h1 className="md:text-4xl text-2xl md:my-10 my-5">
          <b>My Projects</b>
        </h1>
        <div className="flex flex-row justify-between md:gap-15 gap-8 h-10 items-center pr-10">
          <button
            onClick={goLeft}
            className="md:text-4xl text-2xl border-neutral-900 rounded-4xl border md:p-2 p-1 cursor-pointer"
          >
            &lt;
          </button>
          <button
            onClick={goRight}
            className="md:text-4xl text-2xl border-neutral-900 rounded-4xl border md:p-2 p-1 cursor-pointer"
          >
            &gt;
          </button>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="show"
        exit="exit"
        variants={parent}
        transition={{
          delayChildren: stagger(0.4, {
            startDelay: 0.8,
            from: "first",
            ease: easeInOut,
          }),
        }}
        className={`w-full lg:h-[65vh] h-fit grid ${
          cardsPerPage === 1
            ? "grid-cols-1"
            : cardsPerPage === 2
              ? "grid-cols-2"
              : "grid-cols-3"
        } gap-8 overflow-hidden xl:p-4 p-2`}
      >
        <AnimatePresence mode="wait">
          {myProjects.map(
            (p, idx) =>
              current <= idx &&
              idx < cardsPerPage + current && (
                <motion.div
                  variants={child}
                  className="bg-neutral-100  shadow-[inset_-12px_-8px_40px_#46464620] lg:h-[60vh] h-fit rounded-2xl p-8 flex flex-col"
                  key={idx}
                >
                  <h2 className="text-2xl xl:mb-2 mb-1">{p.title}</h2>
                  <img
                    src={"/p" + (idx + 1) + ".png"}
                    alt=""
                    className="lg:h-45"
                  />
                  <p className="text-2xs mt-2 xl:mb-4 md:mb-2 text-neutral-700">
                    {p.content}
                  </p>
                  <div className="flex flex-row justify-end items-center">
                    <a
                      href={p.github}
                      className="hover:text-[#02b1f5] text-base"
                    >
                      GitHub
                    </a>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Projects;
