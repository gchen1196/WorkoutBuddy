const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const findUsers = require('../database/controller.js');
require('../database/index.js');

app.use(express.static(`${__dirname}/../client/dist`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/search', (req, res) => {
  findUsers(req.query, (err, result) => {
    if (err) {
      res.status(400);
      res.send();
    }
    else {
      res.status(200);
      res.send(result);
    }
  })
})

app.listen(port, () => console.log(`App listening on ${port}!`))