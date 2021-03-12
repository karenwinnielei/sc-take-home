const db = require( '../data/dbConfig' );

module.exports = {
  add,
  find,
  findBy,
  findById,
  findTweetsAndReplies
};

async function add ( reply ) {
  const [ id ] = await db( 'replies' ).insert( reply );
  return findById( id );
}
function find () {
  return db( 'replies' );
}
function findBy ( filter ) {
  return db( 'replies' ).where( filter );
}
function findById ( id ) {
  return db( 'replies' ).where( { id } ).first();
}

function findTweetsAndReplies ( id ) {
  return db( 'replies' )
    .where( 'tweetId', id )
    .join( 'tweets', 'replies.tweetId', 'replies.id' )
    .select(
      'tweets.message as TweetMessage',
      'tweets.author as Author',
      'replies.author as Replier',
      'replies.id as RepliesId',
      'replies.message as ReplyMessage',
    );
}