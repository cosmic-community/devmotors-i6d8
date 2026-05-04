import Link from 'next/link';
import { Project } from '@/types';
import ProjectCard from '@/components/ProjectCard';

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return null;
  }

  const featured = projects.filter((p) => p.metadata?.featured).slice(0, 3);
  const displayProjects = featured.length > 0 ? featured : projects.slice(0, 3);

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
          <p className="text-muted">Some of my recent work</p>
        </div>
        <Link
          href="/projects"
          className="text-primary hover:underline font-medium"
        >
          View all →
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}