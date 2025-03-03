"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { OpacityTransition, Transition } from "./ui/Transitions";

interface PageLoadProps {
  setHideLoader: (value: boolean) => void;
}

const Loader = ({ setHideLoader }: PageLoadProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      if (counter < 100) {
        setCounter(counter + 2);
      } else {
        clearInterval(count);
      }
    }, 25);

    return () => {
      clearInterval(count);
    };
  }, [counter]);
  const text = "Danyil Drala - Senior Full stack Developer";

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2.5, duration: 1, type: "tween" }}
      onAnimationComplete={() => setHideLoader(false)}
      className="fixed top-0 left-0 z-[9999] w-[100vw] h-full"
    >
      <div className="container_home flex-col">
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <polygon className="hexagon" points="100,10 180,50 180,150 100,190 20,150 20,50" />
          <text x="100" y="110" text-anchor="middle" alignment-baseline="middle" font-size="100" fill="#64ffda">D</text>
        </svg>
        <OpacityTransition>
          {text}
        </OpacityTransition>
      </div>
    </motion.div>

  );
};

export default Loader;
