import React from "react";

function Footer() {
  return (
    <div className="w-full h-[40px] bg-neutral-800 flex flex-row items-center justify-between p-4 px-30 ">
      <div className="text-neutral-100 md:text-3xs text-xs">
        Developed by Sahasra Gubba
      </div>
      <div className="text-neutral-100 flex flex-row gap-4 md:flex hidden">
        <a href="https://github.com/Sahasra-iiits">GitHub</a>
        <a href="https://www.linkedin.com/in/sahasra-gubba-167440323/">
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default Footer;
