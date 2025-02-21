import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolios from "@/components/Portfolios";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import { Portfolio } from "@/utils/interface";

export default async function Home() {
  const portfolio = (await import("@/dummy.json")).default;

  const {
    about,
    experience,
    skills,
    portfolios,
    education,
    strength
  } = portfolio as Portfolio;

  return (
    <main className="relative">
      <Header />
      <Hero about={about} />
      <About about={about} strength={strength} />
      <Skills skills={skills} />
      <Portfolios portfolios={portfolios} />
      <Education education={education} />
      <Experience experience={experience} />
      <Contact />
    </main>
  );
}
