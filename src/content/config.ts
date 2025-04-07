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
		isRecent: z.boolean(),
	}),
});

const projectsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.string(),
		tags: z.string(),
		overview: z.string(),
		previewImage: z.string(),
		previewImageAlt: z.string(),
		isFeatured: z.boolean(),
	}),
});

const postsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		text: z.string(),
		imagePath: z.array(z.string()),
		tags: z.string(),
		date: z.string(),
	}),
});

export const collections = {
	articles: articlesCollection,
	projects: projectsCollection,
	posts: postsCollection,
};
