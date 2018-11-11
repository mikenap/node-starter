const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  debug('Inside app.get');

  Journal.find({ day: 4 }, (err, day) => {
    if (err) {
      res.send(err);
    } else {
      res.send(day);
    }
  });
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});
