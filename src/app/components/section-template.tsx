import Link from "next/link";

export function SectionTemplate({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <section className="py-5">{children}</section>
    </section>
  );
}

export function SkillListItem({
  title,
  skills,
}: {
  title: string;
  skills: string;
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between border-b py-3 items-start md:items-center">
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-sm font-medium w-80">{skills}</p>
    </div>
  );
}

export function ExperienceListItem({
  experience,
}: {
  experience: {
    title: string;
    company: string;
    date: string;
    description: string;
    companyLink?: string;
    projects?: string[];
  };
}) {
  return (
    <div className="flex flex-col justify-between border-b py-3 items-start">
      <div className="flex justify-between font-semibold text-lg items-center">
        <h2>{experience.title}</h2>
        <p className="px-2">-</p>
        <Link href={experience.companyLink || "#"}>
          <h2>{experience.company}</h2>
        </Link>
      </div>

      <p className="text-sm font-medium w-80 my-2">{experience.date}</p>

      <ul className="list-disc md:list-inside pl-3 md:pl-0">
        {experience.projects?.map((project, index) => (
          <li key={index} className="text-sm py-1">{project}</li>
        ))}
      </ul>
    </div>
  );
}
