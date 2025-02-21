"use client";

import { Description } from "@radix-ui/react-dialog";
import { Import } from "lucide-react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaMobile, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";


const about = {
  title: "About me",
  description: "I'm a Mobile Application Developer with 5 years of experience in the software industry, specializing in Flutter. I have a passion for coding, solving technical challenges, and taking full ownership of app development. Skilled in Flutter, Swift, Xamarin(C#), and Dart, I handle UI/UX design, development, and API integration. I thrive on learning new skills and tackling complex systems to build high-quality, user-friendly applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nutthanitcha Nouwaboot",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+66) 82 885 9955",
    },
    {
      fieldName: "Email",
      fieldValue: "nutthanitcha.n@gmail.com",
    },
   
  ]
};


// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: ` 5+ years in mobile application development
Expert in Flutter, Swift, and C#
UI/UX design, API integration, and backend collaboration
Managing multiple projects and client interactions
Beyond technical expertise, actively improving Full-Stack Development skills to gain a comprehensive understanding of frontend, backend, and database structures. Additionally, enhancing Project Management capabilities to effectively plan, schedule, collaborate with teams, and ensure successful project delivery. 🚀💡`,
  items: [
    {
      company: "MetaEarn Co.,Ltd.",
      position: "Project Manager",
      duration: "Oct 2024 - Jan 2025",
     
     
    },
    {
      company: "MetaEarn Co.,Ltd.",
      position: "Mobile Application Developer (Flutter)",
      duration: "Oct 2022 - Oct 2024",
     
    },
    {
      company: "New Technology Information Co.,Ltd",
      position: "Mobile Application Developer (Flutter)",
      duration: "July 2019 - Oct 2022",
      
    },
  ]
};



// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Thepsatri Rajabhat University.",
  items: [
    {   
      major: "Bachelor of Engineering Program in Computer and Communication Engineering.",
      grade: "Grade: 3.24",
      duration: "2015 - 2018"
    },
    { 
      major: "Bachelor of Business Administration (General Management).",
      grade: "Grade: 2.81",
      duration: "2010 - 2012"
    },
   
  ]
};


// skills data
const skills = {
  title: 'My skills',
  description: "I have gained knowledge and experience in the following skills, and I am continuously learning new skills to further develop myself.",
  skillList: [
   
    {
      icon: <FaMobile />,
      name: "flutter",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
   
  ]
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 2.4, duration: 0.4, ease: 'easeIn'},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
        defaultValue="experience" 
        className="flex flex-col xl:flex-row gap-[60px]">

          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
             <TabsTrigger value="experience">Experience</TabsTrigger>
             <TabsTrigger value="education">Education</TabsTrigger>
             <TabsTrigger value="skills">Skills</TabsTrigger>
             <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left"> 
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                   <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return <li key={index}
                         className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                           <h3 className="text-xl max-w-[260px] min-h-[60px]">{item.position}</h3>
                        
                                                  
                          <div className="flex items-center gap-3">
                            {/* dot */}
                           {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                            <p className="text-white/60">{item.company}</p>

                          </div>
                        </li>
                      })}
                   </ul>
                </ScrollArea>
              </div>
            </TabsContent>


             {/* education */}
             <TabsContent value="education" className="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left"> 
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}
                </p>
                <ScrollArea className="h-[400px]">
                   <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return <li key={index}
                         className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                           <h3 className="text-xl max-w-[260px] min-h-[30px]">{item.grade}</h3>
                           <span className="text-white/60">{item.major}</span>                                                                                        
                        </li>
                      })}
                   </ul>
                </ScrollArea>
              </div>
            </TabsContent>


             {/* skills */}
             <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-4">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                     </li>
                  })}
                </ul>
              </div>
            </TabsContent>



             {/* about */}
             <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index) => {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span>{item.fieldValue}</span>                                       
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
    )
  }
  
  export default Resume