"use client";

import { About } from "../utils/interface";
import { SlideIn, Transition } from "./ui/Transitions";
import LoaderWrapper from "./LoaderWrapper";

interface HeroProps {
  about: About;
}

const Hero = ({ about }: HeroProps) => {
  const openResume = () => {
    window.open('./Danyil-Drala.pdf', '_blank'); // Open PDF in new tab
  };
  return (
    <section className="h-dvh w-dvw overflow-hidden relative" id="home">
      <Transition>
        <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />
      </Transition>
      <LoaderWrapper>
        <div className="relative h-full w-full">
          <div className="flex items-center justify-center flex-col h-full pb-2">
            <Transition>
              <div className="shine-container">
                <span className="shine-text">D</span>
              </div>
            </Transition>
            <div className="py-6 flex items-center flex-col">
              <h2 className="text-3xl font-bold overflow-hidden">
                <SlideIn>Hello! I&apos;m  {about.name}</SlideIn>
              </h2>
            </div>
            <Transition viewport={{ once: true }} className="w-full">
              <p className="opacity-70 md:text-xl w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
                {about.subTitle.split(" ").map((word, index) => (
                  <span key={index}>{word}</span>
                ))}
              </p>
            </Transition>
            <button onClick={openResume} className="beautiful-button mt-7">Resume</button>
          </div>
        </div>
      </LoaderWrapper>
    </section>
  );
};

export default Hero;
