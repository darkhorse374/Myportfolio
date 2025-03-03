"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "motion/react";
import { About as IAbout, Strength } from "../utils/interface";
import { OpacityTextReveal, SlideIn, Transition } from "./ui/Transitions";

interface AboutProps {
  about: IAbout;
  strength: Strength[];
}

const About = ({ about, strength }: AboutProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleActiveIndex = (index) => {
    index === activeIndex?
    setActiveIndex(-1)
    :
    setActiveIndex(index)
  }

  return (
    <section
      className="grid md:grid-cols-[1.8fr_1fr] gap-x-10 px-4 md:px-8 relative"
      id="summary"
      style={{ paddingLeft: '10%', paddingRight: '10%' }}
    >
      <div className="pr-10">
        <h3 className="text-[35px] font-bold overflow-hidden uppercase pb-4">
          <SlideIn>
            <OpacityTextReveal>{about.quote}</OpacityTextReveal>
          </SlideIn>
        </h3>
        <Transition
          viewport={{ once: true }}
          className="text-[20px] tracking-tighter"
        >
          <OpacityTextReveal>{about.description1}</OpacityTextReveal>
          <br />
          <OpacityTextReveal>{about.description2}</OpacityTextReveal>
          <br />
          <OpacityTextReveal>{about.description3}</OpacityTextReveal>
        </Transition>
        <div className="pt-5">
          <div className="py-5 overflow-hidden grid w-full">
            {strength.map((item, index) => (
              <Transition key={index}>
                <StrengthCard
                  index={index}
                  activeIndex={activeIndex}
                  strength={item}
                  handleActiveIndex={handleActiveIndex}
                />
              </Transition>
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="sticky ">
          <Transition>
            <img
              src="./avatar.jpg"
              width={460}
              height={480}
              alt={about.name}
              className="rounded-xl max-md:aspect-square cover pt-[100px]"
            />
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default About;

interface StrengthCardProps {
  strength: Strength;
  activeIndex: number;
  handleActiveIndex: Dispatch<SetStateAction<number>>;
  index: number;
}

const StrengthCard = ({
  strength,
  activeIndex,
  index,
  handleActiveIndex
}: StrengthCardProps) => (
  <section id="about" className="border-b border-primary/20 py-4">
    <div
      className="flex items-center justify-between gap-4 cursor-pointer select-none"
      onClick={() => handleActiveIndex(index)}
    >
      <span className="text-xl md:text-xl font-bold flex-1">
        {strength.jobTitle}
      </span>
      <div className="relative size-6 flex items-center justify-center">
        <span className="bg-primary w-4 md:w-6 h-0.5 absolute" />
        <motion.span
          initial={{ rotate: 90 }}
          animate={{
            rotate: activeIndex === index ? 0 : 90,
          }}
          className="absolute bg-primary w-4 md:w-6 h-0.5 rotate-90"
        />
      </div>
    </div>
    {
      index === activeIndex ?
        <div className="pt-5">
          <ul className="list-inside">
            {strength.bulletPoints.map((point, index) => (
              <li key={index} className="text-foreground/80 max-md:text-md">
                {point}
              </li>
            ))}
          </ul>
        </div>
        :
        <></>
    }
  </section>
);
