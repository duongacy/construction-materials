export type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

export type Image = {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
  formats: Record<'thumbnail' | 'small' | 'medium' | 'large', ImageFormat>;
};

export type Company = {
  id: number;
  name: string;
  location: string;
  description: string;
};

export type Library = {
  id: number;
  name: string;
  url?: string;
};

export type Activity = {
  id: number;
  name: string;
  description: string;
};

export type Certification = {
  id: number;
  field: string;
  organization: string;
  date: string;
};

export type Education = {
  id: number;
  major: string;
  organization: string;
  from: string;
  to: string;
};

export type Project = {
  id: number;
  name: string;
  responsibilities: string[];
  description: string;
  from: string;
  to: string;
  company: Company;
  libraries: Library[];
};
export type Experience = {
  id: number;
  from: string;
  to: string;
  role: string;
  company: Company;
};
export type Skill = {
  id: number;
  name: string;
  description: string;
};

export type WorkExperience = {
  id: number;
  from: string;
  to: string;
  location: string;
  role: string;
};

export type Profile = {
  id: number;
  name: string;
  role: string;
  description: string;
  phone: string;
  mail: string;
  github: string;
  projects: Project[];
  techstack: string[];
  avatar: Image;
  experiences: Experience[];
  certifications: Certification[];
  educations: Education[];
  communities: Activity[];
  skills: Skill[];
  libraries: Library[];
};
