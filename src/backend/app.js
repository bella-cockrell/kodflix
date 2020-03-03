const express = require('express');
const getNotFound = require('./notfound.js');

const app = express();
const port = 3001;


app.get('/', (req, res) => res.send('Hello World! Today is a fine day.'));
//req = request, res = response

app.get('/rest/notfound', (req, res) => { //NOTE REST
  res.send(getNotFound());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
