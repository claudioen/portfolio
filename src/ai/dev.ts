import { config } from 'dotenv';
config();

import '@/ai/flows/auto-tag-resources.ts';
import '@/ai/flows/auto-create-tags-from-search-analytics.ts';
import '@/ai/flows/project-description-generator.ts';