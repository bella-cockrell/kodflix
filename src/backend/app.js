const express = require('express');
const getPages = require('./getPages.js');

const app = express();
const port = 3001;


app.get('/', (req, res) => res.send('Hello World! Today is a fine day.'));
//req = request, res = response

app.get('/rest/pages/:name', (req, res) => { //NOTE REST
  let pages = getPages();
  let page = pages.find(page => page.name === req.params.name);
  res.send(page);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
