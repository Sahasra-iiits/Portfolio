import React from "react";
import { motion } from "motion/react";

function Education() {
  return (
    <div
      id="education"
      className="flex flex-col w-full px-5 py-10 md:px-20 xl:px-35 xl:mb-30 md:mb-20 mb-15"
    >
      <h1 className="md:text-4xl text-2xl my-10 md:mt-30 md:mb-20">
        <b>My Education</b>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="border-neutral-300 border-1 bg-white rounded-xl h-content w-full grid md:grid-cols-2  p-4 gap-4"
      >
        <div className="border-1 border-neutral-300 rounded-lg p-4">
          <div className="flex flex-row gap-4 items-center">
            <img src="sricity.png" className="md:h-25 h-20 rounded-xl" />
            <div className="flex flex-col gap-1">
              <h1 className="md:text-[22px] text-xl tracking-tight">
                <b>Indian Institute of Information Technology, Sri City</b>
              </h1>
            </div>
          </div>
          <hr className="text-neutral-300 my-2" />
          <p>Bachelor of Technology (B.Tech)</p>
          <p className="text-neutral-600 md:text-base text-smmb-4">
            Computer Science and Engineering
          </p>
          <p className="mb-4">Aug 2024 - Present</p>
          <p>
            <b>GPA:</b> 8.8
          </p>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="border-1 border-neutral-300 rounded-lg p-4 row-span-2">
            <p>
              <b>Relevant CourseWork:</b>
            </p>
            <p className="text-sm">-&gt; Data Structures and Algorithms</p>
            <p className="text-sm">-&gt; Probability and Statistics</p>
            <p className="text-sm">-&gt; Operating Systems</p>
            <p className="text-sm">-&gt; Computer Architecture</p>
            <p className="text-sm">-&gt; Database Management System</p>
            <p className="text-sm">-&gt; Artificial Intelligence</p>
          </div>
          <div className="border-1 border-neutral-300 rounded-lg p-4">
            <p>
              <b>Highlights:</b>
            </p>
            <p className="text-sm">Web3SSH 2024 Hackathon Female Winner</p>
            <p className="text-sm">
              GirlScript Summer of Code (GSSoC'26) Contributor
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Education;
