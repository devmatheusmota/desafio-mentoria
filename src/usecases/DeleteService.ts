import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class DeleteServcice {
	id: string;
	constructor(id: string) {
		this.id = id;
	}

	async delete() {
		const deleted = await prisma.service.delete({
			where: { id: parseInt(this.id) },
		});
		return deleted;
	}
}
