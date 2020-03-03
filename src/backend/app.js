const express = require('express');
const app = express();
const port = 3001;
const notfound = require('./notfound.js');

app.get('/', (req, res) => res.send('Hello World! Today is a fine day.'));
//req = request, res = response

app.get('/rest/notfound', (req, res) => {
  res.send(notfound);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
