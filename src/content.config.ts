import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const dateString = z
  .union([z.string(), z.date()])
  .transform((v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v))
  .optional();

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    start_date: dateString,
    end_date: dateString,
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
