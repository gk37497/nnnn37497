import PageTemplate from "../components/page-template";
import {
  ExperienceListItem,
  SectionTemplate,
  SkillListItem,
} from "../components/section-template";

const experiences: {
  title: string;
  company: string;
  date: string;
  description: string;
  companyLink?: string;
  projects?: string[];
}[] = [
  {
    title: "Front End Developer",
    company: "Ondo LLC",
    date: "April 2023 - present",
    companyLink: "https://ondo.mn",
    description:
      "Developed and maintained web and mobile applications for Mobicom Corporation.",
    projects: [
      "Built web app with NextJS",
      "Built admin dashboard with NextJS",
      "Worked on react-native and flutter based mobile app",
      "Used NextJS, Material UI and Tailwind for development",
    ],
  },
  {
    title: "Web Developer",
    company: "Mongol Id",
    date: "July 2021 - April 2023",
    companyLink: "https://www.mid.mn/",
    description:
      "Developed and maintained web and mobile applications for Mobicom Corporation.",
    projects: [
      "Worked on react-native based mobile app",
      "Built web app with NextJS",
      "Built admin dashboard with NextJS",
      "Built admin dashboard API with Java Spring Boot",
      "Used NextJS, Java Spring Boot and tailwind for development",
    ],
  },
  {
    title: "Web Developer",
    company: "Phronesis",
    date: "Sep 2022 - May 2023",
    companyLink: "https://www.phronesis.mn/",
    description:
      "Developed and maintained web and mobile applications for Mobicom Corporation.",
    projects: [
      "Built web app with NextJS",
      "Built e-commerce web app with NextJS and NodeJS",
      "Built admin dashboard with NextJS",
      "Used NextJS, NodeJS, RadixUI and tailwind for development",
    ],
  },
];

const summary = `My name is Namsraijamts. Hailing from Ulaanbaatar, Mongolia, I bring
over 3.5 years of expertise in both web and mobile application
development. I have a passion for exploring cutting-edge
technologies and am always eager to expand my knowledge.`;

export default function page() {
  return (
    <main className="px-3">
      <PageTemplate title="Tserennadmid Namsraijamts">
        <div className="flex flex-col space-y-5">
          {/* Title */}
          <h2 className="text-2xl font-semibold">
            Full-Stack Web & Application Developer
          </h2>

          {/* Summary */}
          <p className="text-sm">{summary}</p>

          {/* Skills */}
          <SectionTemplate title="Skills">
            <SkillListItem
              title="Programming Languages"
              skills="JavaScript, TypeScript, Java ,Dart"
            />
            <SkillListItem
              title="Libs and Frameworks"
              skills="ReactJS, React Native, NextJS, Java Spring Boot, Flutter, NodeJS"
            />

            <SkillListItem title="Databases" skills="PostgreSQL, MongoDB" />

            <SkillListItem
              title="Editors"
              skills="VsCode, Intellij IDEA, DataGrip, WebStorm"
            />
          </SectionTemplate>

          {/* Education */}

          <SectionTemplate title="Education">
            <div className="flex justify-between font-semibold text-lg items-center">
              <h2>
                B.S. in National University of Mongolia, Ulaanbaatar (2018 -
                2022)
              </h2>
            </div>

            <p className="text-sm font-medium w-80 my-2">
              Major in Computer Science
            </p>
          </SectionTemplate>

          {/* Experiences */}
          <SectionTemplate title="Experiences">
            {experiences.map((experience) => (
              <ExperienceListItem
                key={experience.title}
                experience={experience}
              />
            ))}
          </SectionTemplate>

        </div>
      </PageTemplate>
    </main>
  );
}
