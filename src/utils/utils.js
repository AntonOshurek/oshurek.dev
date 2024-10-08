export const sortContentCollectionByDate = (collection) => {
	return collection.sort((a, b) => {
		const da = new Date(a.data.date);
		const db = new Date(b.data.date);
		return db.getTime() - da.getTime();
	});
};

export const truncateOverviewToPreview = (str) => {
	if (str.length > 200) {
		return str.substring(0, 200) + '....';
	} else {
		return str;
	}
};
