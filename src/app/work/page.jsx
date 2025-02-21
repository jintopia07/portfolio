"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'mobile',
    title: 'project 1',
    description: `Design, develop, test, maintain, and deploy Flutter apps using Dart, integrating Firebase for authentication, real-time database, and notifications, while implementing features like maps, localization, and real-time location; build intuitive user interactions, debug issues, and contribute to software design.`,
    stack: [{ name: "Dart"} , {name: "Unity"}],
    image: "/assets/work/smmobile.jpeg",
    live: "",
    github: "",
  },
  {
    num: '02',
    category: 'game',
    title: 'project 2',
    description: `Manage resources by allocating teams, coordinating with stakeholders, and tracking tasks; monitor progress through status checks, meetings, and plan adjustments; gather and document feature requirements; communicate updates and resolve customer issues; and ensure timely project delivery aligned with customer needs.`,
    stack: [{ name: "Dart"}, {name: "Unity"}, {name: "Project Management"}],
    image: "/assets/work/sm.jpeg",
    live: "",
    github: "",
  },
  {
    num: '03',
    category: 'web',
    title: 'project 3',
    description:`Manage resources by allocating teams, coordinating with stakeholders, and tracking tasks; monitor progress through status checks, meetings, and plan adjustments; gather and document feature requirements; communicate updates and resolve customer issues; and ensure timely project delivery aligned with customer needs.`,
    stack: [{ name: "React"} , {name: "Css 3"}, {name: "Project Management"}],
    image: "/assets/work/sm1.jpeg",
    live: "",
    github: "",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
     // get current slide index
     const currentIndex = swiper.activeIndex;
     // update project state base on current slide index
     setProject(projects[currentIndex]);

  }
    return (
      <motion.section 
       initial={{opacity: 0}} 
       animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
       className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold">
                  {project.num}
                </div>
                {/* project category */}
                <h2 className="text-[42px] font-bold leading-none text-white groung-hover:text-accent transition-all duration-500 capitalize">{
                project.category} project
                </h2>
                {/* project description */}
                <p className="text-white/60">{project.description}</p>
                {/* stack */}
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return ( 
                      <li key={index} className="text-xl text-accent">
                         {item.name}
                         {/* remove the last comma */}
                         {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                {/* border */}
                <div className="border border-white/20"></div>
               
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                      <SwiperSlide key={index} className="w-full">
                         <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                            {/* overlay */}
                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                            {/* image */}
                            <div className="relative w-full h-full">
                              <Image
                                 src={project.image}
                                 fill
                                 className="object-cover"
                                 alt=""
                               />
                            </div>
                         </div>
                      </SwiperSlide> 
                    );
                })}
                {/* slider buttons */}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    )
  }
  
  export default Work