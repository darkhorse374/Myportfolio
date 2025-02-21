"use client";

import { Education } from "../utils/interface";
import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";
import { HoverImage } from "./ui/HoverImage";

interface ServiceProps {
  education: Education;
}

function Services({ education }: ServiceProps) {
  return (
    <section className="px-2 py-20 relative" id="education" style={{marginLeft: "10%", marginRight: "10%"}}>
      <SectionHeading className="overflow-hidden tracking-tighter">
        <SlideIn className="text-[35px]">EDUCATION</SlideIn>
      </SectionHeading>
      <div className="mx-auto">
          <Transition>
            <HoverImage
              heading={education.name}
              price={education.charge}
              imgSrc={education.image.url}
              subheading={education.desc}
            />
          </Transition>
      </div>
    </section>
  );
}

export default Services;
