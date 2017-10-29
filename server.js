const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const {join} = require('path');

const server = express();
const port = process.env.PORT || 5050;

server.use(compression());
server.use(helmet());
server.use(express.static(join(__dirname, 'build')));

server.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

server.listen(port);
