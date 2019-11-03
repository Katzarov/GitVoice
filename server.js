const express = require('express');
const mongoose = require('mongoose')
const app = express();

// Middleware
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to DB
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> console.log('DB connected'))
  .catch(err => console.log(err))

// test api
app.get('/api/test', (req, res) => {
  const test = 'api works';
  res.json(test);
});

// github webhook test
app.post('/api/hook', (req, res) => {
  console.log(req.body.issue.title)
  res.json(200)
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));