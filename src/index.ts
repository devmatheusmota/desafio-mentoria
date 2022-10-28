import express from 'express';
import { router } from './api/router';

const app = express();

app.use(express.json());

app.use('/', router);

app.listen(3000, () => {
	console.log('Listening on http://localhost:3000');
});
