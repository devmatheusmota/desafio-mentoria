export class convertToValidDate {
	convert(date: string) {
		let [day, month, year] = date.split('/');
		year = year.split('-')[0];
		return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
	}
}
