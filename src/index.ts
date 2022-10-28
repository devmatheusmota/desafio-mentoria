import express from 'express';
import { router } from './api/router';
const HOST = '0.0.0.0';
const PORT = 3333;

const app = express();

app.use(express.json());

app.use('/', router);

app.listen(PORT, HOST, () => {
	console.log(`
	Listening on http://${HOST}:${PORT}`);
});
