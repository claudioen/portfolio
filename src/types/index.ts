export type Project = {
  id: string;
  title: string;
  category: 'Dashboards' | 'Automation' | 'Case Studies';
  description: string;
  image: {
    src: string;
    hint: string;
  };
  tags: string[];
  url?: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tools: string[];
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  type: 'Article' | 'Book' | 'Video';
  tags: string[];
  url: string;
};
