import { getAllProjects } from "@/lib/getAllProjects";

export default async function Home() {


  const projects = await getAllProjects();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold">BizTech Portfolio Workshop</h1>
      <div className="px-64">
        {/* {projects.map((project) => (
          <div key={project.slug}>
            <h2>{JSON.stringify(project)}</h2>
          </div>
        ))} */}
      </div>
    </div>
  );
}
