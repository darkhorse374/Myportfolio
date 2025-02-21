"use client";

import { Skill } from "../utils/interface";
import { ParallaxText } from "./ui/ParallaxText";

interface SkillsProps {
  skills: Skill[];
}

function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills">
      <ParallaxText baseVelocity={-5}>
        {skills.map((skill, index) =>
          <span
            key={index}
            className="md:text-3xl text-xl font-semibold uppercase text-white/30 tracking-tighter"
          >
            {skill.name} •
          </span>
        )}
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        {skills.map((skill, index) =>
          <span
            key={index}
            className="md:text-3xl text-xl font-semibold uppercase text-white/30 tracking-tighter"
          >
            {skill.name} •
          </span>
        )}
      </ParallaxText>
      <ParallaxText baseVelocity={-5}>
        {skills.map((skill, index) =>
          <span
            key={index}
            className="md:text-3xl text-xl font-semibold uppercase text-white/30 tracking-tighter"
          >
            {skill.name} •
          </span>
        )}
      </ParallaxText>
    </section>
  );
}

export default Skills;
