import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().default("/static/blog-placeholder.png"),
    draft: z.boolean().default(false),
    pinned: z.boolean().default(false),
    categorise: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const gossips = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().default("/static/blog-placeholder.png"),
    draft: z.boolean().default(false),
    pinned: z.boolean().default(false),
    categorise: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts, gossips };
