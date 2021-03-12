const router = require('express').Router();

const Tweets = require('./tweetModel');

router.get('/', (req, res) => {
  Tweets.find()
    .then((tweet) => {
      res.status(200).json(tweet);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
