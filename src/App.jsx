import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {
  motion,
  LayoutGroup,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [showHero, setShowHero] = useState(true);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShowHero(latest < 0.22);
  });
  return (
    <LayoutGroup>
      <motion.div
        className="flex flex-col items-center w-full h-content"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(99, 76, 76, 0.5) 1px, transparent 0)",
          backgroundSize: "30px 30px",
          backgroundRepeat: "repeat",
        }}
      >
        <Navbar />
        <Hero showHero={showHero} />
        <div
          id="about"
          className="lg:h-[90px] md:h-[60px] h-[30px] w-full md:border-t-10 border-t-5 border-[#17a9e5] shadow-[0_-6px_20px_rgba(253,224,71,1) rounded-t-[90%] bg-neutral-800"
        ></div>
        <About showHero={showHero} />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </motion.div>
    </LayoutGroup>
  );
}

export default App;
