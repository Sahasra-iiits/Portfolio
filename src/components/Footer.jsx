import React from "react";
import { motion } from "motion/react";

function Footer() {
  return (
    <div className="w-full h-[7vh] bg-neutral-800 flex flex-row items-center justify-between p-4 px-30 ">
      <div className="text-neutral-100 md:text-sm text-xs flex gap-1">
        <p>Developed by</p>
        <motion.p
          whileHover={{ rotate: -3 }}
          className="hover:bg-[#17a9e5] hover:text-black hover:px-1 hover:rounded hover:cursor-pointer"
        >
          Sahasra Gubba
        </motion.p>
      </div>
      <div className="text-neutral-100 md:flex-row gap-4 md:flex hidden">
        <a
          className="md:text-sm text-xs"
          href="https://github.com/Sahasra-iiits"
        >
          GitHub
        </a>
        <a
          className="md:text-sm text-xs"
          href="https://www.linkedin.com/in/sahasra-gubba-167440323/"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default Footer;
