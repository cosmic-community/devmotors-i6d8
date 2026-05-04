import { getProfile } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';

export const metadata = {
  title: 'About - Devmotors',
  description: 'Learn more about me'
};

export default async function AboutPage() {
  const profile = await getProfile();

  if (!profile) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="text-muted mt-4">No profile information available.</p>
      </div>
    );
  }

  const fullName = getMetafieldValue(profile.metadata?.full_name) || profile.title;
  const jobTitle = getMetafieldValue(profile.metadata?.job_title);
  const bio = getMetafieldValue(profile.metadata?.bio);
  const photo = profile.metadata?.profile_photo;
  const email = getMetafieldValue(profile.metadata?.email);
  const location = getMetafieldValue(profile.metadata?.location);
  const resume = profile.metadata?.resume;

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-12">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
            alt={fullName}
            width={200}
            height={200}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-border"
          />
        )}
        <h1 className="text-5xl font-bold mb-2">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            {fullName}
          </span>
        </h1>
        {jobTitle && <p className="text-xl text-muted">{jobTitle}</p>}
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {email && (
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-xs text-muted uppercase mb-1">Email</p>
            <a href={`mailto:${email}`} className="text-sm hover:text-primary">
              {email}
            </a>
          </div>
        )}
        {location && (
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-xs text-muted uppercase mb-1">Location</p>
            <p className="text-sm">{location}</p>
          </div>
        )}
        {resume && (
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-xs text-muted uppercase mb-1">Resume</p>
            <a
              href={resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Download PDF
            </a>
          </div>
        )}
      </div>

      {bio && (
        <div className="bg-card border border-border rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <div
            className="text-muted leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: bio }}
          />
        </div>
      )}
    </div>
  );
}