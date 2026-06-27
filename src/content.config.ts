import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Load all markdown files from the src/content/blog folder
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    keywords: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
