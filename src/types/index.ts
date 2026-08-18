export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
}

export interface Education {
  period: string;
  title: string;
  institution: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  image: string;
}

export interface AboutMe {
  name: string;
  gender: string;
  age: number;
  maritalStatus: string;
  city: string;
  nationality: string;
  phone: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
}

export interface PersonalInfo {
  name: string;
  roles: string[];
  bio: string;
  photo: string;
  cvUrl: string;
  socialLinks: SocialLink[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  aboutMe: AboutMe;
  projects: Project[];
  contact: ContactInfo;
}
