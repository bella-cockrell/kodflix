const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Hello World! Today is a fine day.'));
//req = request, res = response

app.get('/rest/not-found', (req, res) => {
  res.send('Not found');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
