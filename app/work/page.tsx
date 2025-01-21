"use client";
import { motion } from "framer-motion";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";
import {
  TooltipTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

import { FaCss3, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiLangchain, SiMysql } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import WorkSliderButtons from "@/components/WorkSliderButtons";
const imagePath = "/assets/work/";
const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Snake Game",
    description:
      "A fun snake game built with React where users control the snake to eat food and grow.",
    stack: [
      { icon: <FaHtml5 />, name: "Html 5" },
      { icon: <FaCss3 />, name: "Css 3" },
      { icon: <RiJavascriptFill />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
    ],
    image: `${imagePath}image1.png`,
    github: "https://github.com/Prabhat-7/Snake-game.git",
  },
  {
    num: "02",
    category: "frontend",
    title: "Weather App",
    description:
      "A api-based weather application displaying current forecasted weather conditions.",
    stack: [
      { icon: <FaHtml5 />, name: "Html 5" },
      { icon: <FaCss3 />, name: "Css 3" },
      { icon: <BiLogoTypescript />, name: "TypeScript" },
      { icon: <FaReact />, name: "React" },
    ],
    image: `${imagePath}image2.png`,
    github: "https://github.com/Prabhat-7/weather-app.git",
  },
  {
    num: "03",
    category: "full-stack",
    title: "Todo List",
    description:
      "A full-stack to-do list application using React for the frontend and Django with MySQL for the backend.",
    stack: [
      { icon: <FaCss3 />, name: "Css 3" },
      { icon: <BiLogoTypescript />, name: "TypeScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiDjango />, name: "Django" },
      {
        icon: (
          <div className="-mt-3">
            <SiMysql size={40} />
          </div>
        ),
        name: "MySQL",
      },
    ],
    image: `${imagePath}image3.png`,
    github: "https://github.com/Prabhat-7/Todo-List.git",
  },
  {
    num: "04",
    category: "AI-integrated",
    title: "AI-Powered Drawing App",
    description:
      "An AI-integrated drawing app where users can sketch and get AI-generated solutions.",
    stack: [
      { icon: <SiDjango />, name: "Django" },
      { icon: <BiLogoTypescript />, name: "TypeScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <FaCss3 />, name: "Css 3" },
      { icon: <FaPython />, name: "Python" },
      { icon: <FaHtml5 />, name: "Html 5" },
      {
        icon: (
          <div className="-mt-1">
            <SiLangchain size={35} />
          </div>
        ),
        name: "Langchain",
      },
    ],
    image: `${imagePath}image4.png`,
    github: "https://github.com/Prabhat-7/AI-Powered-Drawing-App.git",
  },
  {
    num: "05",
    category: "AI-integrated",
    title: "AI ChatBot",
    description:
      "A chatbot built using LangChain and Django for conversational AI capabilities.",
    stack: [
      { icon: <SiDjango />, name: "Django" },
      { icon: <BiLogoTypescript />, name: "TypeScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <FaCss3 />, name: "Css 3" },
      { icon: <FaPython />, name: "Python" },
      { icon: <FaHtml5 />, name: "Html 5" },
      {
        icon: (
          <div className="-mt-1">
            <SiLangchain size={35} />
          </div>
        ),
        name: "Langchain",
      },
    ],
    image: `${imagePath}image5.png`,
    github: "https://github.com/Prabhat-7/AiChatBot.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 1.2,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] ">
              {/* outline num             */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              {/* project category */}
              <h2 className=" text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Github repo </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </h2>
              {/* project description  */}
              <div>
                <h3 className="text-xl">{project.title}</h3>
                <p className="text-white/60 ">{project.description}</p>
              </div>
              {/* stack */}
              <ul className="flex gap-4 ">
                {project.stack.map((item, index) => (
                  <li key={index} className="">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="flex items-center">
                          <div className=" text-2xl hover:text-accent transition-all duration-300">
                            {item.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className=" text-xs  px-0 py-0 capitalize ">
                            {item.name}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
              {/* border  */}
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20   ">
                    {/* overlay  */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                    {/* image */}
                    <div className="relative w-full h-full ">
                      <Image
                        src={project.image}
                        fill
                        priority
                        quality={100}
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* swiper buttons  */}
              <WorkSliderButtons
                containerStyles=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles=" bg-accent hover:bg-accent-hover text-primary text-[22px] h-[44px] w-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
