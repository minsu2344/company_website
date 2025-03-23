require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('안녕');
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('DB 연결 성공'))
  .catch((err) => console.log(`DB 연결 실패: ${err}`));

app.listen(PORT, () => {
  console.log('서버 도는 중');
});
