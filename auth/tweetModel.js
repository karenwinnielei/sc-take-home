const db = require('../data/dbConfig')

module.exports = {
  add,
  find,
  findBy,
  findById,
}

async function add ( tweet ) {
  const [ id ] = await db( 'tweets' ).insert( tweet );
  return findById( id );
}

function find () {
  return db( 'tweets' );
}
function findBy ( filter ) {
  return db( 'tweets' ).where( filter );
}
function findById ( id ) {
  return db( 'tweets' ).where( { id } ).first();
}