// MODEL
import type { AppCollectionEntry } from './content.model.ts';

const sortContentCollectionByDate = <T extends AppCollectionEntry>(collection: T[]): T[] => {
	return collection.toSorted(
		(a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
	);
};

export { sortContentCollectionByDate };
