import type { Project, Experience, Resource } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'National Rail Dashboard',
    category: 'Dashboards',
    description: 'A comprehensive sales dashboard providing real-time insights into performance and key metrics.',
    image: { src: 'https://images.unsplash.com/uploads/1413387158190559d80f7/6108b580?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hint: 'dashboard ui' },
    tags: ['Power BI', 'Excel', 'Python'],
    url: 'https://github.com/claudioen/National-Rail-Project',
  },
  {
    id: '2',
    title: 'Data Validatorn',
    category: 'Automation',
    description: 'Practical tool to check the quality of tabular data.',
    image: { src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hint: 'data pipeline' },
    tags: ['Python', 'Streamlit', 'Pandas'],
    url: 'https://github.com/claudioen/data-validator',
  },
  {
    id: '3',
    title: 'Polymarket End-to-End',
    category: 'Automation',
    description: 'End-to-end system that gathers Polymarket market data, processes it, and displays live insights on a web dashboard.',
    image: { src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hint: 'market analysis' },
    tags: ['Data Engineering', 'End-to-End Pipeline', 'Data Visualization'],
    url: 'https://github.com/claudioen/polymarket-end2end',
  },
  {
    id: '4',
    title: 'AI in Sales',
    category: 'Case Studies',
    description: 'Investigate the extent to which AI technologies are integrated into daily sales workflows.',
    image: { src: 'https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hint: 'customer chart' },
    tags: ['Survey Research', 'Artificial Intelligence (AI)', 'Data Analysis'],
    url: 'https://github.com/claudioen/AI-in-Sales/tree/main',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Freelancer',
    role: 'Part-time Web Editor',
    period: 'Sep 2024 - Present',
    description: 'Publish articles and run functional QA on a WordPress site: fix minor front-end issues.',
    achievements: [
      'Published articles and ran functional QA on a WordPress site.',
      'Fixed minor front-end issues.'
    ],
    tools: ['WordPress', 'HTML', 'CSS'],
  },
  {
    id: '2',
    company: 'Copan Italia Spa (Copan Group)',
    role: 'Data Analyst',
    period: 'May 2022 - Aug 2024',
    description: 'Multinational company specialised in microbiology and pre-analytics solutions (Rev. € 395 million, Emp. 1,200).',
    achievements: [
      'Built ETL pipelines with Azure Data Factory; wrote stored procedures and tuned SQL Server; designed star-schema models and Power BI dashboards (OEE, Quality, Ticketing 3,000+, People Analytics) for 1,000+ users.',
      'Drove automation with Python/SQL and Excel (Power Query, DAX); integrated production data from Microsoft Dynamics; improved reporting speed and cross-team decisions, contributing to +25% efficiency.',
      'Worked within Azure DevOps practices.'
    ],
    tools: ['Azure Data Factory', 'SQL Server', 'Power BI', 'Python', 'Excel', 'Power Query', 'DAX', 'Microsoft Dynamics', 'Azure DevOps'],
  },
  {
    id: '3',
    company: 'DuckMa Srl',
    role: 'Data & Business Analyst',
    period: 'Mar 2021 - Apr 2022',
    description: 'Develops custom mobile apps, cloud solutions, and IoT platforms for businesses (Rev. € 300k, Emp. 10).',
    achievements: [
      'Launched the Analytics function and standardised data validation (+20% data quality); supported ISO 9001:2015.',
      'Integrated HubSpot CRM with analytics to track campaigns and journeys, improving lead conversion by 15%.',
      'Operated in Agile (Kanban/Scrum), supported the PM in ceremonies; owned documentation in Notion; delivered exec presentations and marketing automations (Power Automate, Hubspot).'
    ],
    tools: ['Agile', 'Kanban', 'Scrum', 'Notion', 'Power Automate', 'Hubspot', 'ISO 9001:2015'],
  },
];

export const resources: Resource[] = [
  {
    id: '1',
    title: 'SQL for Data Analysis',
    description: 'A practical guide to using SQL for data analysis, from basic queries to advanced techniques. By Cathy Tanimura (O\'Reilly).',
    type: 'Book',
    tags: ['SQL', 'Data Analysis', 'O\'Reilly'],
    url: 'https://www.oreilly.com/library/view/sql-for-data/9781492088776/',
  },
  {
    id: '2',
    title: 'Storytelling with Data',
    description: 'A guide by Cole Nussbaumer Knaflic on how to communicate effectively with data and create compelling visualizations.',
    type: 'Book',
    tags: ['Data Visualization', 'Business Intelligence', 'Storytelling'],
    url: 'http://www.storytellingwithdata.com/book',
  },
  {
    id: '3',
    title: 'Python for Data Analysis, 3rd Edition',
    description: 'The definitive guide by Wes McKinney (O\'Reilly) to using Python and the pandas library for data manipulation and analysis.',
    type: 'Book',
    tags: ['Python', 'Pandas', 'Data Science', 'O\'Reilly'],
    url: 'https://wesmckinney.com/book/',
  },
  {
    id: '4',
    title: 'The Kimball Group Reader',
    description: 'A comprehensive collection of articles from the pioneers of dimensional modeling, essential for data warehousing.',
    type: 'Book',
    tags: ['Data Warehousing', 'ETL', 'Dimensional Modeling'],
    url: 'https://www.amazon.com/gp/product/1119216311?ie=UTF8&tag=decworks-20&lin%20kCode=xm2&camp=1789&creativeASIN=1119216311',
  },
  {
    id: '5',
    title: 'What do we do when we get it wrong?',
    description: 'A thought-provoking article by Benn Stancil on the challenges and realities of data analytics in organizations.',
    type: 'Article',
    tags: ['Data Strategy', 'Analytics', 'Business'],
    url: 'https://benn.substack.com/p/when-we-get-it-wrong',
  },
  {
    id: '6',
    title: 'The Modern Data Stack: Past, Present, and Future',
    description: 'An insightful article from dbt Labs that breaks down the evolution of data infrastructure and tooling.',
    type: 'Article',
    tags: ['Data Engineering', 'Modern Data Stack', 'Technology'],
    url: 'https://www.getdbt.com/blog/future-of-the-modern-data-stack',
  },
  {
    id: '7',
    title: 'Guy in a Cube',
    description: 'A YouTube channel focused on Power BI and Business Intelligence, with practical tips, tricks, and weekly news updates.',
    type: 'Video',
    tags: ['Power BI', 'Business Intelligence', 'Microsoft'],
    url: 'https://www.youtube.com/@GuyInACube',
  },
  {
    id: '8',
    title: 'StatQuest with Josh Starmer',
    description: 'Complex statistics and machine learning concepts made simple and easy to understand. Bam!',
    type: 'Video',
    tags: ['Statistics', 'Machine Learning', 'Data Science'],
    url: 'https://www.youtube.com/@statquest',
  },
  {
    id: '9',
    title: 'Alex The Analyst',
    description: 'A great YouTube channel for aspiring data analysts, offering career advice, project tutorials, and tech skill walkthroughs.',
    type: 'Video',
    tags: ['Data Analysis', 'Career', 'SQL', 'Tableau'],
    url: 'https://www.youtube.com/@AlexTheAnalyst',
  },
  {
    id: '10',
    title: 'Harvard Business Review - Analytics',
    description: 'A collection of articles on how analytics is changing business, strategy, and leadership.',
    type: 'Article',
    tags: ['Business', 'Analytics', 'Leadership', 'Strategy'],
    url: 'https://hbr.org/topic/subject/analytics-and-data-science',
  },
];
