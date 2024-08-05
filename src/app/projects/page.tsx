import Image from "next/image";
import PageTemplate from "../components/page-template";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const projects: {
  title: string;
  description: string;
  buildWith?: string[];
  link: string;
}[] = [
  {
    title: "Ondo LLC official website",
    buildWith: ["NextJS", "Material UI", "Tailwind", "TypeScript"],
    description:
      "Mongolian telecommunication group - Ondo LLC official web application",
    link: "https://ondo.mn/",
  },
  {
    title: "Sonos audio book mobile application",
    buildWith: ["React Native", "TypeScript"],
    description:
      "Sonos Books is a subscription based audiobook service provider. (Mobile version)",
    link: "https://apps.apple.com/kr/app/sonos-books/id1615287048",
  },
  {
    title: "Sell stream",
    buildWith: ["NextJS", "Material UI", "Tailwind", "TypeScript"],
    description: "E-commerce web for Mindset Master Academy",
    link: "https://www.sellstream.shop/store/651ed071ea08fc96617b0efb/product/e546b878-cc7e-4bc5-ab04-ed993ab2b302",
  },

  {
     title: "Mongolian Trip",
     buildWith: ["NextJS", "Tailwind", "TypeScript", "Prisma", "PostgreSQL"],
     description: "Mongolian Trip is a travel agency website",
     link: "https://mongoliantrip.com/",
   },

  {
    title: "Sonos audio book web application",
    buildWith: [
      "NextJS",
      "Material UI",
      "Tailwind",
      "TypeScript",
      "Java Spring Boot",
      "PostgreSQL",
    ],
    description:
      "Sonos Books is a subscription based audiobook service provider. (WEB version)",
    link: "http://sonos.mn/",
  },
  {
    title: "Sonos audio book admin dashboard",
    buildWith: ["NextJS", "Material UI", "Tailwind", "TypeScript"],
    description: "SONOS audio book admin dashboard",
    link: "http://admin.sonos.mn/",
  },
  {
    title: "ONDO SPACE official website",
    buildWith: ["NextJS", "Tailwind", "TypeScript"],
    description: "ONDO SPACE official website",
    link: "https://ondospace.com/",
  },
  {
    link: "https://www.phronesis.mn/",
    title: "Phronesis LLC official website",
    description: "Phronesis LLC official website",
    buildWith: ["ReactJS", "Tailwind", "TypeScript"],
  },
];

const unOfficialProjects: {
  title: string;
  buildWith?: string[];
}[] = [
  {
    title: "Ondo LLC official mobile application",
    buildWith: ["Dart", "Flutter"],
  },
  {
    title: "UFE website - ufe.edu.mn",
    buildWith: ["ReactJS", "TypeScript"],
  },
  {
    title: "Infosys.ufe.edu.mn",
    buildWith: ["Symfony", "PHP", "MySQL"],
  },
  {
    title: "Mongolian Tours website",
    buildWith: ["NextJS", "Tailwind", "TypeScript"],
  },
  {
    title: "Tsakhim Bogts blog website",
    buildWith: ["NextJS", "Tailwind", "TypeScript", "Strapi CMS"],
  },
];

const ProjectCard = ({
  title,
  description,
  link,
  buildWith,
}: {
  title: string;
  description: string;
  link: string;
  buildWith?: string[];
}) => {
  return (
    <Card className="hover:shadow-lg duration-150">
      <Link href={link} style={{ height: "100%" }}>
        <CardHeader>
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription className="text-[12px]">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {buildWith && (
            <div className="flex flex-wrap gap-1">
              {buildWith.map((item, index) => (
                <span key={index} className="text-[10px] pr-1 font-semibold">
                  #{item}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  );
};

export default function page() {
  return (
    <main className="px-3 pb-12">
      <PageTemplate title="Things I've done">
        {/* Built as SOLO developer */}
        <section className="mt-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-3">
            {projects.map((project) => (
              <ProjectCard {...project} key={project.title} />
            ))}
          </div>
        </section>

        {/* Built as a team member */}

        <div className="mt-8">
          <h1>
            <span className="text-xl font-semibold">Built as </span>
            <span className="text-xl font-semibold text-anchor">
              a team member
            </span>
          </h1>
          <ul className="list-disc md:list-inside pl-3 md:pl-0">
            {unOfficialProjects.map((project, index) => (
              <li key={index} className="text-sm py-1 font-medium">
                {project.title}
              </li>
            ))}
            ...
          </ul>
        </div>
      </PageTemplate>
    </main>
  );
}
