import { PORT } from './config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
