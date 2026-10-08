// ASTRO
import type { CollectionEntry } from 'astro:content';

type AppCollectionEntry = CollectionEntry<'articles' | 'posts' | 'projects'>;

export type { AppCollectionEntry };
