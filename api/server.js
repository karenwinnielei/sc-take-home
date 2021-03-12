const express = require('express');
const tweetRouter = require('../auth/tweetRouter');
const replyRouter = require('../auth/replyRouter');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use('/api/tweets', tweetRouter);
server.use('/api/replies', replyRouter);

server.get('/', (req, res) => {
  data = {
    message: 'Server is running on /',
    reply: 'Way cool tool!',
  };
  res.send(`${data.message} and ${data.reply}`);
});

module.exports = server;
