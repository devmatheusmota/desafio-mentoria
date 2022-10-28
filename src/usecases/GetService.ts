import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class GetService {
	description: string | undefined;
	title: string | undefined;
	service_id: number | undefined;
	constructor(description?: string, title?: string, service_id?: number) {
		this.description = description;
		this.title = title;
		this.service_id = service_id;
	}

	async get() {
		if (!this.description && !this.title && !this.service_id) {
			const services = await prisma.service.findMany();
			return services;
		}

		if (!this.description && !this.title) {
			const services = await prisma.service.findMany({
				where: { service_id: Number(this.service_id) },
			});
			return services;
		}
		if (!this.description) {
			const services = await prisma.service.findMany({
				where: { title: { contains: String(this.title) } },
			});
			return services;
		}
		if (!this.title) {
			const services = await prisma.service.findMany({
				where: { description: { contains: String(this.description) } },
			});
			return services;
		}
		const services = await prisma.service.findMany();
		return services;
	}
}
