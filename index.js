const PORT = 3000;
const express = require('express');
const server = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { client } = require('./db');

const apiRouter = require('./api');

server.use('/api', apiRouter);

server.use(bodyParser.json());

server.use(morgan('dev'));

server.use((req, res, next) => {
    console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<_____Body Logger END_____>");
  
    next();
  });

client.connect();

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});