import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    roles: z.array(z.string()).default([]),
    context: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          link_title: z.string(),
          url: z.string().url(),
        }),
      )
      .default([]),
    video: z.string().optional(),
  }),
});

export const collections = { projects };
