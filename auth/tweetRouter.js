const router = require('express').Router();

const Tweets = require('./tweetModel');
const TweetsAndReplies = require('./allModel')

router.get('/', (req, res) => {
  Tweets.find()
    .then((tweet) => {
      res.status(200).json(tweet);
    })
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Tweets.findById(id)
    .then((tweet) => {
      if (tweet) {
        res.status(200).json({
          tweetId: `${tweet.id}`,
          message: `${tweet.message}`,
          author: `${tweet.author}`,
          timestamp: `${tweet.timestamp}`,
        });
      } else {
        res.status(404).json({
          message: 'could not find tweet with given id',
        });
      }
    })
    .catch((err) => res.status(500).json(err));
});

router.post( '/', ( req, res ) => {
  const tweetData = req.body;

  Tweets.add( tweetData )
    .then( ( tweet ) => {
      res.status( 201 ).json( tweet );
    } )
    .catch( ( err ) => {
      res
        .status( 500 )
        .json( { message: 'Failed to create new tweet' } );
    } );
} );

router.get( '/:id/tweetsandreplies', ( req, res ) => {
  const { id } = req.params;
  TweetsAndReplies.findTweetsAndReplies( id )
    .then( ( tweet ) => {
      res.status( 200 ).json( tweet );
    } )
    .catch( ( err ) => res.status( 500 ).json( err ) );
} );

module.exports = router;
