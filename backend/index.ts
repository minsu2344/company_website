import express, { Request, Response } from 'express';
require('dotenv').config();
import userRouter from './routes/user';

const mongoose = require('mongoose');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req: Request, res: Response) => {
  res.send('안녕');
});

app.use('/auth', userRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('DB 연결 성공'))
  .catch((err) => console.log(`DB 연결 실패: ${err}`));

app.listen(PORT, () => {
  console.log('서버 도는 중');
});
