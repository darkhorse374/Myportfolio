export interface Portfolio {
  about: About;
  experience: Experience[];
  skills: Skill[];
  portfolios: PortSamples[];
  education: Education;
  strength: Strength[];
}

export interface About {
  name: string;
  title: string;
  subTitle: string;
  description1: string;
  description2: string;
  description3: string;
  quote: string;
}

export interface Skill {
  name: string;
  sequence: number;
}

export interface PortSamples {
  liveurl: string;
  githuburl: string;
  title: string;
  sequence: number;
  image: Image;
  description: string;
  techStack: string[];
  _id: string;
  enabled: boolean;
}

export interface Image {
  public_id: string;
  url: string;
}

export interface Education {
  name: string;
  charge: string;
  desc: string;
  image: Image;
}

export interface Experience {
  company_name: string;
  summary: string;
  sequence: number;
  startDate: string;
  endDate: string;
  jobTitle: string;
  jobLocation: string;
  bulletPoints: string[];
}

export interface Strength {
  jobTitle: string;
  bulletPoints: string[];
}