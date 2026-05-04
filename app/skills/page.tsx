import { getSkills } from '@/lib/cosmic';
import SkillsSection from '@/components/SkillsSection';

export const metadata = {
  title: 'Skills - Devmotors',
  description: 'Technologies and tools I work with'
};

export default async function SkillsPage() {
  const skills = await getSkills();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            My Skills
          </span>
        </h1>
        <p className="text-muted text-lg">
          Tools and technologies I use to bring ideas to life
        </p>
      </div>

      {skills.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted">No skills available yet.</p>
        </div>
      ) : (
        <SkillsSection skills={skills} />
      )}
    </div>
  );
}