import Link from 'next/link';
import { Project } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function ProjectCard({ project }: { project: Project }) {
  const projectName = getMetafieldValue(project.metadata?.project_name) || project.title;
  const description = getMetafieldValue(project.metadata?.short_description);
  const image = project.metadata?.project_image;
  const techStack = getMetafieldValue(project.metadata?.tech_stack);
  const featured = project.metadata?.featured;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-card border border-border rounded-xl overflow-hidden hover:bg-card-hover hover:border-primary/50 transition-all duration-300"
    >
      {image && (
        <div className="relative aspect-video overflow-hidden bg-background">
          <img
            src={`${image.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
            alt={projectName}
            width={600}
            height={338}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {featured && (
            <span className="absolute top-3 right-3 px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {projectName}
        </h3>
        {description && (
          <p className="text-muted text-sm mb-4 line-clamp-2">{description}</p>
        )}
        {techStack && (
          <div className="flex flex-wrap gap-2">
            {techStack.split(',').slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-background border border-border rounded text-muted"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}