import { Router, Request, Response } from 'express';
import { CreateService } from '../usecases/CreateService';
import { DeleteServcice } from '../usecases/DeleteService';
import { GetService } from '../usecases/GetService';
export const router = Router();

router.post('/servicos', async (req: Request, res: Response) => {
	const {
		title,
		description,
		date,
		service_id,
		user_id,
		recurrent,
		recurrencyWeekDays,
		recurrencyLimitDate,
	} = req.body;
	const service = await new CreateService(
		title,
		description,
		date,
		service_id,
		user_id,
		recurrent,
		recurrencyWeekDays,
		recurrencyLimitDate
	).create();
	res.json({ service });
});

router.get('/servicos', async (req: Request, res: Response) => {
	const { description, title, service_id } = req.query;

	const services = await new GetService(
		String(description),
		String(title),
		Number(service_id)
	).get();

	return res.status(200).json({ services });
});

router.delete('/servicos/:id', async (req: Request, res: Response) => {
	const { id } = req.params;
	const deleted = await new DeleteServcice(id).delete();
	return res.json({ deleted });
});
