import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  schema: z
    .object({
      title: z.string(),
      category: z.union([
        z.literal("javascript"),
        z.literal("typescript"),
        z.literal("react"),
        z.literal("markdown"),
        z.literal("web"),
      ]),
      date: z.date(),
    })
    .strict(),
});

export const collections = {
  posts: postsCollection,
};
