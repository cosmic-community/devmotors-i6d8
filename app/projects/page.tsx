import { getProjects } from '@/lib/cosmic';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects - Devmotors',
  description: 'Explore my portfolio of projects'
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            All Projects
          </span>
        </h1>
        <p className="text-muted text-lg">
          A collection of work I&apos;m proud of
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted">No projects available yet.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}