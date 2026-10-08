const truncateOverviewToPreview = (str: string) => {
	if (str.length > 200) {
		return str.substring(0, 200) + '....';
	} else {
		return str;
	}
};

export { truncateOverviewToPreview };
