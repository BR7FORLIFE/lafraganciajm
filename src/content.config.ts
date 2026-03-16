import { defineCollection, z } from "astro:content";

const perfumes = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        price: z.string(),
        url: z.string(),
    }),
});

export const collections = { perfumes };
