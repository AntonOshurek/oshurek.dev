export const sortArticlesByDate = (articles) => {
	return articles.sort((a, b) => {
		const da = new Date(a.data.date);
		const db = new Date(b.data.date);
		return db.getTime() - da.getTime();
	});
};
