"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { SectionHeading} from "./ui/Typography";
import { Portfolio, PortSamples } from "../utils/interface";
import { useVariants } from "../utils/hooks";
import { SlideIn, Transition } from "./ui/Transitions";

interface PortfoliosProps {
  portfolios: PortSamples[];
}

function Portfolios({ portfolios }: PortfoliosProps) {
  return (
    <section className="md:p-8 p-4 mt-10 relative container" id="portfolio" style={{marginLeft: "10%", marginRight: "10%"}}>
      <SectionHeading className="md:pl-12">
        <SlideIn className="text-white text-[35px]">PORTFOLIO</SlideIn>
      </SectionHeading>

      <motion.div className="grid lg:grid-cols-3 grid-cols-2 md:gap-6 gap-3 relative">
        {portfolios
          .map((portfolio, index) => (
            <Transition
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              key={index}
            >
              <Card {...portfolio} />
            </Transition>
          ))}
      </motion.div>
    </section>
  );
}

export default Portfolios;

const Card = ({ title, image, description }: PortSamples) => {
  const [hover, setHover] = useState(false);
  const { setVariant } = useVariants();

  const mouseEnter = () => {
    setHover(true);
    setVariant("PROJECT");
  };
  const mouseLeave = () => {
    setHover(false);
    setVariant("DEFAULT");
  };

  const handleOnClick = () => {
    window.open(`${image.public_id}`, '_blank');
  }
  return (
    <motion.div
      layout
      className="relative rounded-xl md:rounded-3xl overflow-hidden aspect-square bg-secondary/30 md:px-4"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      style={{cursor: "pointer"}}
    >
      <div className="md:py-8 relative">
        <motion.div
          animate={{ y: hover ? -10 : 0 }}
          className="flex justify-between items-center max-md:hidden"
        >
          <p className="text-sm md:text-xl font-semibold max-md:opacity-0">
            {title}
          </p>
        </motion.div>
      </div>
      <img src={image.url}
        alt={title}
        width={500}
        height={400}
        className="object-contain rounded-xl md:rounded-t-3xl"
        onClick={handleOnClick}
      />
      <h4 className="pt-10">
        {description}
      </h4>
    </motion.div>
  );
};
