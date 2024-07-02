import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.string(),
		tags: z.string(),
		overview: z.string(),
		previewImage: z.string(),
		previewImageAlt: z.string(),
	}),
});

export const collections = {
	articles: articlesCollection,
};
