// This is an auto-generated file from Firebase Studio.

'use server';

/**
 * @fileOverview An AI agent that automatically creates tags for projects based on search query analytics.
 *
 * - autoCreateTagsFromSearchAnalytics - A function that triggers the tag creation process.
 * - AutoCreateTagsFromSearchAnalyticsInput - The input type for the autoCreateTagsFromSearchAnalytics function.
 * - AutoCreateTagsFromSearchAnalyticsOutput - The return type for the autoCreateTagsFromSearchAnalytics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const AutoCreateTagsFromSearchAnalyticsInputSchema = z.object({
  searchQueries: z.array(z.string()).describe('An array of search queries from users.'),
  existingTags: z.array(z.string()).describe('An array of existing tags.'),
});

export type AutoCreateTagsFromSearchAnalyticsInput = z.infer<typeof AutoCreateTagsFromSearchAnalyticsInputSchema>;

const AutoCreateTagsFromSearchAnalyticsOutputSchema = z.object({
  newTags: z.array(z.string()).describe('An array of new tags generated from the search queries.'),
});

export type AutoCreateTagsFromSearchAnalyticsOutput = z.infer<typeof AutoCreateTagsFromSearchAnalyticsOutputSchema>;

export async function autoCreateTagsFromSearchAnalytics(input: AutoCreateTagsFromSearchAnalyticsInput): Promise<AutoCreateTagsFromSearchAnalyticsOutput> {
  return autoCreateTagsFromSearchAnalyticsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'autoCreateTagsFromSearchAnalyticsPrompt',
  input: {schema: AutoCreateTagsFromSearchAnalyticsInputSchema},
  output: {schema: AutoCreateTagsFromSearchAnalyticsOutputSchema},
  prompt: `You are an expert tag generator for a portfolio application. You will analyze a list of search queries and identify common themes and concepts to suggest new tags.

Given the following search queries:
{{#each searchQueries}}- {{{this}}}
{{/each}}

And the following existing tags:
{{#each existingTags}}- {{{this}}}
{{/each}}

Generate a list of new tags that would be helpful for users to find projects. Ensure that the new tags are not already in the existing tags list. Return only new tags.

New Tags:`, // Ensure output is suitable for direct use as tags.
});

const autoCreateTagsFromSearchAnalyticsFlow = ai.defineFlow(
  {
    name: 'autoCreateTagsFromSearchAnalyticsFlow',
    inputSchema: AutoCreateTagsFromSearchAnalyticsInputSchema,
    outputSchema: AutoCreateTagsFromSearchAnalyticsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      newTags: output ? output.newTags : [], // Return an empty array if output is null/undefined.
    };
  }
);
