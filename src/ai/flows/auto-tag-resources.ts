'use server';

/**
 * @fileOverview A flow to automatically tag resources with AI-generated tags.
 *
 * - autoTagResources - A function that handles the resource tagging process.
 * - AutoTagResourcesInput - The input type for the autoTagResources function.
 * - AutoTagResourcesOutput - The return type for the autoTagResources function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutoTagResourcesInputSchema = z.object({
  resourceContent: z
    .string()
    .describe('The content of the resource (article, PDF, blog post).'),
});
export type AutoTagResourcesInput = z.infer<typeof AutoTagResourcesInputSchema>;

const AutoTagResourcesOutputSchema = z.object({
  tags: z
    .array(z.string())
    .describe('An array of AI-generated tags for the resource.'),
});
export type AutoTagResourcesOutput = z.infer<typeof AutoTagResourcesOutputSchema>;

export async function autoTagResources(
  input: AutoTagResourcesInput
): Promise<AutoTagResourcesOutput> {
  return autoTagResourcesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'autoTagResourcesPrompt',
  input: {schema: AutoTagResourcesInputSchema},
  output: {schema: AutoTagResourcesOutputSchema},
  prompt: `You are an expert tag generator. You will generate tags for the provided resource content.

  Resource Content: {{{resourceContent}}}

  Return a maximum of 5 tags.`,
});

const autoTagResourcesFlow = ai.defineFlow(
  {
    name: 'autoTagResourcesFlow',
    inputSchema: AutoTagResourcesInputSchema,
    outputSchema: AutoTagResourcesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
