const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || config.get('server.port');

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});
