import express from 'express';
import { router } from './api/router';

const app = express();

app.use(express.json());

app.use('/', router);

app.listen(3333, () => {
	console.log('Listening on http://localhost:3333');
});
