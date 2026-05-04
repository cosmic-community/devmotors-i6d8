// app/projects/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const projectName = getMetafieldValue(project.metadata?.project_name) || project.title;
  const shortDescription = getMetafieldValue(project.metadata?.short_description);
  const fullDescription = getMetafieldValue(project.metadata?.full_description);
  const image = project.metadata?.project_image;
  const techStack = getMetafieldValue(project.metadata?.tech_stack);
  const liveUrl = getMetafieldValue(project.metadata?.live_url);
  const githubUrl = getMetafieldValue(project.metadata?.github_url);

  return (
    <article className="container mx-auto px-4 py-12 max-w-5xl">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-muted hover:text-foreground mb-8 transition-colors"
      >
        ← Back to projects
      </Link>

      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        <span className="bg-gradient-primary bg-clip-text text-transparent">
          {projectName}
        </span>
      </h1>

      {shortDescription && (
        <p className="text-xl text-muted mb-8">{shortDescription}</p>
      )}

      <div className="flex flex-wrap gap-4 mb-8">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View Live Site →
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-card-hover transition-colors"
          >
            View Code
          </a>
        )}
      </div>

      {image && (
        <div className="rounded-xl overflow-hidden border border-border mb-12">
          <img
            src={`${image.imgix_url}?w=2000&h=1125&fit=crop&auto=format,compress`}
            alt={projectName}
            width={1000}
            height={563}
            className="w-full h-auto"
          />
        </div>
      )}

      {techStack && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.split(',').map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {fullDescription && (
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <div
            className="text-muted leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: fullDescription }}
          />
        </div>
      )}
    </article>
  );
}