"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiLangchain,
  SiDjango,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

//abourt data
const about = {
  title: "About me",
  description:
    "I am a passionate web developer with over 3 years of experience in building dynamic and user-centric websites and applications. I have a strong foundation in both front-end and back-end technologies, and I’m always eager to learn and grow in the ever-evolving field of web development.",
  info: [
    { fieldName: "Name", fieldValue: "Prabhat Sitaula" },
    { fieldName: "Phone", fieldValue: "(+977)9815061795" },
    { fieldName: "Expierience ", fieldValue: "3+ Years" },
    { fieldName: "Email ", fieldValue: "contact@prabhatsitaula.com.np" },
    { fieldName: "Nationality ", fieldValue: "Nepalese" },
    { fieldName: "Freelance ", fieldValue: "Available" },
    { fieldName: "Languages ", fieldValue: "English,Hindi,Nepali" },
  ],
};
const education = {
  title: "My Education",
  description:
    "My learning journey began in 2022, focusing on building a solid foundation in programming and web development. Over time, I have expanded my expertise through a variety of courses in modern technologies, from front-end frameworks like React to back-end development with Django and database management using MySQL.",
  items: [
    {
      Course_By: "FreeCodeCamp",
      Course_On: "JavaScript",
      Completion_Status: "Completed",
      Date: "July 2022",
    },
    {
      Course_By: "Online Course Platform",
      Course_On: "Python",
      Completion_Status: "Completed",
      Date: "October 2022",
    },
    {
      Course_By: "Udemy",
      Course_On: "React",
      Completion_Status: "Completed",
      Date: "Jan 2023",
    },
    {
      Course_By: "Codecademy",
      Course_On: "TypeScript",
      Completion_Status: "In Progress",
      Date: "June 2023",
    },
    {
      Course_By: "Online Course",
      Course_On: "Django for Beginners",
      Completion_Status: "Completed",
      Date: "October 2023",
    },
    {
      Course_By: "Coursera",
      Course_On: "MySQL and Databases",
      Completion_Status: "Completed",
      Date: "Feb 2024",
    },
    {
      Course_By: "Online Platform",
      Course_On: "Full-Stack Web Development",
      Completion_Status: "Completed",
      Date: "March 2024",
    },
  ],
};
const skills = {
  title: "My skills",
  description:
    "I have developed a diverse set of skills in modern web development, including front-end, back-end, and full-stack technologies. I continuously strive to enhance my knowledge and expertise to build efficient, user-friendly applications.",
  skillsList: [
    { icon: <FaHtml5 />, name: "Html 5" },
    { icon: <FaCss3 />, name: "Css 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <BiLogoTypescript />, name: "TypeScript" },
    { icon: <FaNodeJs />, name: "Node JS" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind.css" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiLangchain />, name: "Langchain" },
    { icon: <TbBrandFramerMotion />, name: "Framer Motion" },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full ">
            {/* education */}
            <TabsContent value="education" className="w-full  ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className=" text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify leading-relaxed ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                      >
                        <span className="text-accent">{item.Date}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                          {item.Course_On}
                        </h3>
                        <div className=" flex items-center gap-3">
                          {/* dot */}
                          <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.Course_By}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify leading-relaxed ">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillsList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className=" text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify leading-relaxed ">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      {" "}
                      <span className=" text-white/60">{item.fieldName}</span>
                      <span className=" text-lg">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
