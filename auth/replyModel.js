const db = require( '../data/dbConfig' );

module.exports = {
  add,
  find,
  findBy,
  findById,
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
