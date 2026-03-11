import { defineCollection, z } from "astro:content";

const perfumes = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        descripcion: z.string(),
        price: z.string(),
    }),
});

export const collections = { perfumes };
