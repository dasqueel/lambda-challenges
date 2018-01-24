function daysBetween (start, end) {
	// dateStart = new Date(Date.parse(start).toISOString());
	// dateEnd = new Date(Date.parse(end).toISOString());

	let dateStart = Date.parse(start).getDay();
	let dateEnd = Date.parse(end).getDay();

	return dateEnd - dateStart;
}