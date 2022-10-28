import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { convertToValidDate } from '../utils/convertToValidDate';

export class CreateService {
	title: string;
	description: string;
	date: string;
	service_id: number;
	user_id: number;
	recurrent: boolean;
	recurrencyWeekDays: number[];
	recurrencyLimitDate: string;
	constructor(
		title: string,
		description: string,
		date: string,
		service_id: number,
		user_id: number,
		recurrent: boolean,
		recurrencyWeekDays: number[],
		recurrencyLimitDate: string
	) {
		this.title = title;
		this.description = description;
		this.date = date;
		this.service_id = service_id;
		this.user_id = user_id;
		this.recurrent = recurrent;
		this.recurrencyWeekDays = recurrencyWeekDays;
		this.recurrencyLimitDate = recurrencyLimitDate;
	}

	async create() {
		const initDate = new convertToValidDate().convert(this.date);
		const limitDate = new convertToValidDate().convert(
			this.recurrencyLimitDate
		);
		const recurrentDates: Date[] = [];

		if (this.recurrent === true) {
			let diffInDays = Math.round(
				Math.abs(
					(initDate.getTime() - limitDate.getTime()) / (1000 * 60 * 60 * 24)
				)
			);

			for (let i = 0; i <= 6; i++) {
				let tempDate = new Date(initDate);
				if (this.recurrencyWeekDays.indexOf(i) > -1) {
					for (let j = 1; j <= diffInDays; j++) {
						if (i === tempDate.getDay()) {
							recurrentDates.push(new Date(tempDate));
						}
						tempDate.setDate(tempDate.getDate() + 1);
					}
				}
			}

			recurrentDates.sort((x, y) => {
				let a: any = new Date(x);
				let b: any = new Date(y);
				return a - b;
			});
		}

		const created = await prisma.service.create({
			data: {
				title: this.title,
				description: this.description,
				date: initDate,
				service_id: this.service_id,
				user_id: this.user_id,
				recurrentDates: recurrentDates,
			},
		});
		0;
		return created;
	}
}
