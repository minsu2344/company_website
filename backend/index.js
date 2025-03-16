const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('안녕');
})

app.listen(PORT, () => {
  console.log('서버 도는 중')
})