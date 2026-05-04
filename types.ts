export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Profile extends CosmicObject {
  type: 'profile';
  metadata: {
    full_name?: string;
    job_title?: string;
    tagline?: string;
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    location?: string;
    github_url?: string;
    linkedin_url?: string;
    twitter_url?: string;
    resume?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_name?: string;
    short_description?: string;
    full_description?: string;
    project_image?: {
      url: string;
      imgix_url: string;
    };
    tech_stack?: string;
    live_url?: string;
    github_url?: string;
    featured?: boolean;
  };
}

export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    skill_name?: string;
    category?: string | { key: string; value: string };
    proficiency?: string | { key: string; value: string };
    icon?: {
      url: string;
      imgix_url: string;
    };
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}