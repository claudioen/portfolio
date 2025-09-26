import type { Project, Experience, Resource } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sales Dashboard',
    category: 'Dashboards',
    description: 'A comprehensive sales dashboard providing real-time insights into performance and key metrics.',
    image: { src: 'https://picsum.photos/seed/p1/600/400', hint: 'dashboard ui' },
    tags: ['Tableau', 'SQL', 'Data Visualization'],
    url: '#',
  },
  {
    id: '2',
    title: 'ETL Pipeline Automation',
    category: 'Automation',
    description: 'Automated the process of extracting, transforming, and loading data from multiple sources into a data warehouse.',
    image: { src: 'https://picsum.photos/seed/p2/600/400', hint: 'data pipeline' },
    tags: ['Python', 'Airflow', 'BigQuery'],
    url: '#',
  },
  {
    id: '3',
    title: 'Market Expansion Analysis',
    category: 'Case Studies',
    description: 'A business case study analyzing potential new markets, including forecasting and risk assessment.',
    image: { src: 'https://picsum.photos/seed/p3/600/400', hint: 'market analysis' },
    tags: ['Excel', 'PowerPoint', 'Market Research'],
    url: '#',
  },
  {
    id: '4',
    title: 'Customer Segmentation',
    category: 'Dashboards',
    description: 'Developed a customer segmentation model and an interactive dashboard to identify key customer groups.',
    image: { src: 'https://picsum.photos/seed/p4/600/400', hint: 'customer chart' },
    tags: ['Power BI', 'R', 'Machine Learning'],
    url: '#',
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
    url: 'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-books/the-kimball-group-reader-2nd-edition/',
  },
  {
    id: '5',
    title: 'Why is it so hard to get value from data?',
    description: 'A thought-provoking article by Benn Stancil on the challenges and realities of data analytics in organizations.',
    type: 'Article',
    tags: ['Data Strategy', 'Analytics', 'Business'],
    url: 'https://benn.substack.com/p/why-is-it-so-hard-to-get-value',
  },
  {
    id: '6',
    title: 'The Modern Data Stack: Past, Present, and Future',
    description: 'An insightful article from a16z that breaks down the evolution of data infrastructure and tooling.',
    type: 'Article',
    tags: ['Data Engineering', 'Modern Data Stack', 'Technology'],
    url: 'https://a16z.com/the-modern-data-stack-past-present-and-future/',
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
    url: 'https://www.youtube.com/c/statquest',
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
    url: 'https://hbr.org/topic/analytics',
  },
];
