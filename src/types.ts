export interface InfoBlock {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TechItem {
  name: string;
  badgeUrl?: string;
  bgHex?: string;
  textHex?: string;
  logo?: string;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  repoName: string;
  repoUrl: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface MilestoneItem {
  id: string;
  status: 'completed' | 'in_progress' | 'future';
  title: string;
  description: string;
}

export interface AchievementStat {
  icon: string;
  number: string;
  title: string;
  subtitle: string;
}

export interface ProfileData {
  githubUsername: string;
  fullName: string;
  tagline: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
  greetingTitle: string;
  greetingSubtitle: string;
  aboutMeTitle: string;
  infoBlocks: InfoBlock[];
  techCategories: TechCategory[];
  featuredProjects: FeaturedProject[];
  achievementStats: AchievementStat[];
  milestones: MilestoneItem[];
  activeMission: {
    status: string;
    progressPercent: number;
    systemsBuilt: number;
    nextGoal: string;
  };
  dailyQuote: {
    quote: string;
    author: string;
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
    twitter?: string;
    portfolio?: string;
  };
}
