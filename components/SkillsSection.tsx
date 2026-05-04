import { Skill } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';
import SkillCard from '@/components/SkillCard';

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  if (!skills || skills.length === 0) {
    return null;
  }

  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <section className="bg-card/30 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Skills & Expertise</h2>
          <p className="text-muted">Technologies I work with</p>
        </div>
        <div className="space-y-12">
          {Object.keys(grouped).map((category) => {
            const categorySkills = grouped[category];
            if (!categorySkills || categorySkills.length === 0) {
              return null;
            }
            return (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-6 capitalize">
                  {category}
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}