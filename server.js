const express = require('express');
const app = express();
app.use(require('body-parser').json())

app.get('/api/test', (req, res) => {
  const test = 'api works';
  res.json(test);
});

app.post('/api/hook', (req, res) => {
  console.log(req.body.issue.title)
  res.json(200)
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));