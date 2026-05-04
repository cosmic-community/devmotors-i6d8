import { getProfile, getProjects, getSkills } from '@/lib/cosmic';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import SkillsSection from '@/components/SkillsSection';

export default async function HomePage() {
  const [profile, projects, skills] = await Promise.all([
    getProfile(),
    getProjects(),
    getSkills()
  ]);

  return (
    <>
      <Hero profile={profile} />
      <FeaturedProjects projects={projects} />
      <SkillsSection skills={skills} />
    </>
  );
}