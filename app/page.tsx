import { getAllProjects } from "@/lib/getAllProjects";
import Link from "next/link";

export default async function Home() {


  const projects = await getAllProjects();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-medium">BizTech Portfolio Workshop</h1>
      <div className="">
        {projects.map((project) => (
          <ul key={project.slug}>
            {" • "}
            <Link className="hover:underline" href={`/project/${project.slug}`}>{project.title}</Link>
          </ul>
        ))}
      </div>
    </div>
  );
}
