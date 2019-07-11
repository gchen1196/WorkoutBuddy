const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static(`${__dirname}/../client/dist`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => console.log(`App listening on ${port}!`))