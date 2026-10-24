import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    module: z.string().optional().default(''), // e.g. "limitlar", "hosila", "funksiyalar-grafiklar"
    order: z.number(),
    description: z.string(),
    duration: z.string().optional(),
    category: z.string().optional(),
    difficulty: z.string().optional(),
  }),
});

export const collections = { lessons };
