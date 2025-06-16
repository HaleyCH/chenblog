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
    password: z.string().optional(),
  }),
});

const assets = defineCollection({
  type: "content",
  // 不需要 schema，或 schema 只校验 body
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
    password: z.string().optional(),
  }),
});

export const collections = { posts, gossips, assets };
