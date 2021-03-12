const router = require( 'express' ).Router();

const Replies = require( './replyModel' );

router.get( '/', ( req, res ) => {
  Replies.find()
    .then( ( reply ) => {
      res.status( 200 ).json( reply );
    } )
    .catch( ( err ) => res.status( 500 ).json( err ) );
} );

router.get( '/:id', ( req, res ) => {
  const { id } = req.params;
  Replies.findById( id )
    .then( ( reply ) => {
      if ( reply ) {
        res.status( 200 ).json( {
          replyId: `${ reply.id }`,
          message: `${ reply.message }`,
          author: `${ reply.author }`,
          timestamp: `${ reply.timestamp }`,
        } );
      } else {
        res.status( 404 ).json( {
          message: 'could not find reply with given id',
        } );
      }
    } )
    .catch( ( err ) => res.status( 500 ).json( err ) );
} );



router.post( '/', ( req, res ) => {
  const replyData = req.body;

  Replies.add( replyData )
    .then( ( reply ) => {
      res.status( 201 ).json( reply );
    } )
    .catch( ( err ) => {
      res
        .status( 500 )
        .json( { message: 'Failed to reply to tweet' } );
    } );
} );

module.exports = router;
