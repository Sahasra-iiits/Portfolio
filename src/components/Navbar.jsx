import React, { useState, useEffect } from "react";
import { motion, stagger } from "motion/react";
import Logo from "../assets/logo.png";

function Navbar() {
  const nav_items = ["Home", "About", "Projects", "Education", "Contact"];
  const [hovered, setHovered] = useState(-1);

  return (
    <div className="z-20 lg:w-210 md:w-150 sm:w-125 w-80 h-10 rounded-4xl bg-neutral-800 text-neutral-100 fixed top-8 p-4 flex flex-row items-center justify-between shadow-[1px_1px_4px_rgb(255,255,255,1)]">
      <div className="pl-4  hidden sm:block">
        <img src={Logo} alt="Icon" className="h-8 rounded-4xl" />
      </div>
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="flex flex-row items-center justify-between md:w-fit md:gap-6 lg:gap-8 w-full"
      >
        {nav_items.map((item, idx) => (
          <a
            key={idx}
            href={"#" + item.toLowerCase()}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => {
              setHovered(-1);
            }}
            className="flex flex-col md:text-base text-sm"
          >
            {item}
            {hovered == idx && (
              <motion.div
                initial={{ width: "0px" }}
                animate={{ width: "45px" }}
                className=" h-[2px] bg-[#1abcfe] inline absolute"
              ></motion.div>
            )}{" "}
          </a>
        ))}
      </motion.div>
    </div>
  );
}

export default Navbar;
