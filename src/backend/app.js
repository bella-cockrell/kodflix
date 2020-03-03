const express = require('express');
const getPages = require('./getPages.js');

const app = express();
const port = 3001;


app.get('/', (req, res) => res.send('Hello World! Today is a fine day.'));
//req = request, res = response

app.get('/rest/pages/:name?', (req, res) => { //NOTE REST and ? -- if no req
  res.send(getPages(req.params.name));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
