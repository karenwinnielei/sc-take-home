exports.up = function (knex) {
  return knex.schema
    .createTable('tweets', (tbl) => {
      tbl.increments();
      tbl.string('message', 140).notNullable();
      tbl.string('author', 140).notNullable();
      tbl.datetime('timestamp').notNullable();
    })
    .createTable('replies', (tbl) => {
      tbl.increments();
      tbl.string('message', 140).notNullable();
      tbl.string('author', 140).notNullable();
      tbl.datetime('timestamp').notNullable();
      tbl
        .integer('tweetId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tweets')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('users', (tbl) => {
      tbl.increments();
      tbl.string('name', 140).notNullable();
    })
    .createTable('users_tweets', (tbl) => {
      tbl.increments();
      tbl
        .integer('userId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('tweetId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tweets')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('users_replies', (tbl) => {
      tbl.increments();
      tbl
        .integer('userId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('replyId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('replies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
  knex.schema
    .dropTableIfExists('users_tweets')
    .dropTableIfExists('users_replies')
    .dropTableIfExists('replies')
    .dropTableIfExists('tweets');
};
