import React, { useEffect, useState, useRef } from "react";
import {
  stagger,
  easeInOut,
  motion,
  scale,
  AnimatePresence,
} from "motion/react";
import { SiGithub, SiGmail } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { div } from "motion/react-client";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    emailjs.init({
      publicKey: "LZ89WYcSisPqD6xQH",
    });
  }, []);

  const handleOnClick = (e) => {
    e.preventDefault();
    if (formData.email != "" && formData.name != "" && formData.message != "") {
      setClicked(true);
      // emailjs.sendForm("service_d0bd149", "template_6fmfhbb", ref.current).then(
      //   () => {
      //     console.log("SUCCESS!");
      //   },
      //   (error) => {
      //     console.log("FAILED...", error);
      //   },
      // );
    }

    setFormData({ email: "", name: "", message: "" });
  };

  const cards = [
    {
      icon: SiGithub,
      text: "Sahasra-iiits",
    },
    {
      icon: SlSocialLinkedin,
      text: "Sahasra Gubba",
    },
    {
      icon: SiGmail,
      text: "sahasra.g24@iiits.in",
    },
  ];

  const pVar = { hidden: {}, show: {} };
  const cVar = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: Math.random() > 0.5 ? 2 : -2,
    },
  };
  return (
    <div id="contact" className="px-5 md:px-15 xl:px-35 w-full h-content">
      <motion.h1
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ delay: 0.2 }}
        className="md:text-4xl text-2xl mb-3"
      >
        <b>Let's Build Something Together</b>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-neutral-600 md:text-base text-sm"
      >
        Have an idea, internship opportunity, or just want to say hello? I'd
        love to hear from you.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid md:grid-cols-2 gap-1 md:h-90 bg-neutral-100 border rounded-xl border-neutral-300 my-10  w-full h-fit md:w-full"
      >
        <div className="md:p-5 sm:mb-10 md:mb-0 flex flex-col gap-1 items-center justify-center w-full h-fit md:w-auto md:h-auto">
          <motion.div
            initial="hidden"
            animate={hovered ? "show" : "hidden"}
            variants={pVar}
            transition={{
              delayChildren: stagger(0.1, { from: "first", ease: easeInOut }),
            }}
            className="flex flex-row gap-2 w-fit"
          >
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={cVar}
                className="bg-white rounded-xl flex flex-col items-center justify-between md:h-25 md:w-32 h-20 w-15 p-2 border border-neutral-200"
              >
                <card.icon className="md:h-15 md:w-15 w-10 h-10" />
                <p className="text-sm tracking-tight md:block hidden">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <img
            src="cardboard.png"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="md:h-45 h-30 cursor-pointer"
          />
          <p className="text-sm text-neutral-400">Hover on me</p>
        </div>

        <AnimatePresence>
          {!clicked && (
            <motion.form
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              ref={ref}
              className="flex flex-col w-full h-fit md:w-auto justify-center gap-2 p-4"
            >
              <span>Name:</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="abc"
                required
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className=" p-2 border rounded-xl border-neutral-300 w-full"
              />
              <span>Email:</span>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                placeholder="abc@gmail.com"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="p-2 border rounded-xl border-neutral-300 w-full"
              />
              <span>Enter Your Message:</span>
              <textarea
                required
                name="message"
                placeholder="Hey!"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="border rounded-xl border-neutral-300 h-20 p-2 w-full"
              />

              <button
                type="submit"
                className="bg-[#17a9e5] text-white rounded p-2 cursor-pointer"
                onClick={handleOnClick}
              >
                Submit
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {clicked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col w-full md:w-auto justify-center gap-2 p-4 h-full items-center"
            >
              <div className="xl:text-3xl md:text-2xl sm:text-xl font-medium italic">
                Thankyou! I'll get back to you soon{" "}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Contact;
