import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articlesCollection = defineCollection({
	loader: glob({
		base: './src/content/articles',
		pattern: '**/*.{md,mdx}',
	}),
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
	loader: glob({
		base: './src/content/projects',
		pattern: '**/*.{md,mdx}',
	}),
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
	loader: glob({
		base: './src/content/posts',
		pattern: '**/*.{md,mdx}',
	}),
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
