"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Experience as IExperience } from "../utils/interface";
import { SectionHeading } from "./ui/Typography";
import { SlideIn, Transition } from "./ui/Transitions";
import { formatDate } from "../utils";

interface ExperienceProps {
  experience: IExperience[];
}

const Timeline = ({ experience }: ExperienceProps) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="relative"  style={{marginLeft: "10%", marginRight: "10%"}} id="experience">
      <span className="blob absolute left-0 w-1/3 h-5/6 blur-[100px] -z-10" />
      <SectionHeading className="md:px-12">
        <SlideIn className="text-[35px]">EXPERIENCE</SlideIn>
      </SectionHeading>
      <div>
        {experience.map((exp, index) => (
          <Transition
            key={index}
            className="py-4 md:py-8 border-b border-white/10 hover:bg-white/5 px-2 md:px-12"
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <div className="flex items-center justify-between md:gap-8">
              <div className="text-[25px] md:font-semibold flex-1">
                {exp.jobTitle}
              </div>
              <div className="max-md:text-sm max-md:flex flex-col text-foreground/50">
                <span className="italic">
                  {formatDate(exp.startDate).month +
                    ", " +
                    formatDate(exp.startDate).year}
                </span>
                <span className="max-md:hidden">{" - "}</span>
                <span className="italic">
                  {formatDate(exp.endDate).month +
                    ", " +
                    formatDate(exp.endDate).year}
                </span>
              </div>
            </div>
            <div className="py-2 text-foreground/50 max-md:text-sm flex items-center justify-between">
              <span>{exp.company_name}</span>
              <span>{exp.jobLocation}</span>
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: hover === index ? "100%" : 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <p className="text-foreground/60 py-2">{exp.summary}</p>
              <ul className="list-disc list-inside">
                {exp.bulletPoints.map((point, index) => (
                  <li key={index} className="text-foreground/80 max-md:text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
