const express = require('express');
const app = express();
const movies = require('./movies.json');
const cors = require('cors');

app.use(cors());

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
