import React from "react";
import image from "../assets/image.png";
import about from "../assets/about.png";
import { motion, AnimatePresence, easeInOut } from "motion/react";

function Laptop({ showHero }) {
  return (
    <div className="flex flex-col items-center justify-center md:mt-40">
      <div className="bg-neutral-900 rounded-2xl -rotate-z-2 border-3 border-neutral-700 lg:h-47 h-42 lg:w-70 w-60 flex flex-col items-center justify-between gap-1">
        <div className="bg-neutral-100 h-1 w-1 rounded-2xl mt-1"></div>
        <AnimatePresence>
          {showHero && (
            <motion.img
              layoutId="about_img"
              transition={{ duration: 0.7, ease: easeInOut }}
              src={about}
              alt=""
              className="lg:h-40 h-35"
            />
          )}
        </AnimatePresence>
        <div className="text-neutral-100 text-[5px]">
          <b> MacBook Air</b>
        </div>
      </div>
      <div className="h-2 w-50 -rotate-z-2 bg-neutral-900 relative bottom-1 hidden md:block"></div>
      <div className="bg-[#e0e0e1] rounded-2xl relative bottom-15 left-3 lg:h-60 md:h-55 md:w-60 lg:w-70  flex-col gap-4 justify-center items-center gap-1 rotate-x-60 -rotate-z-5 hidden md:flex">
        <img src={image} className="rounded lg:h-30 md:h-25 lg:w-60 md:w-50"></img>
        <div className="border-neutral-400 h-20 w-20 border-1"></div>
      </div>
    </div>
  );
}

export default Laptop;
