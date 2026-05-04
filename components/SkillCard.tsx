import { Skill } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function SkillCard({ skill }: { skill: Skill }) {
  const skillName = getMetafieldValue(skill.metadata?.skill_name) || skill.title;
  const proficiency = getMetafieldValue(skill.metadata?.proficiency);
  const icon = skill.metadata?.icon;

  const proficiencyMap: Record<string, number> = {
    beginner: 25,
    intermediate: 50,
    advanced: 75,
    expert: 100,
    Beginner: 25,
    Intermediate: 50,
    Advanced: 75,
    Expert: 100
  };

  const profValue = proficiencyMap[proficiency] || 50;

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:bg-card-hover hover:border-primary/50 transition-all">
      <div className="flex items-center gap-4 mb-4">
        {icon ? (
          <img
            src={`${icon.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={skillName}
            width={48}
            height={48}
            className="w-12 h-12 rounded-lg object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
            {skillName.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold">{skillName}</h3>
          {proficiency && (
            <p className="text-xs text-muted capitalize">{proficiency}</p>
          )}
        </div>
      </div>
      <div className="w-full h-2 bg-background rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-primary rounded-full transition-all duration-700"
          style={{ width: `${profValue}%` }}
        />
      </div>
    </div>
  );
}