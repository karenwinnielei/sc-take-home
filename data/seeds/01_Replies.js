
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('replies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('replies').insert([
        {
          message: 'hello karen',
          author: 'scott',
          timestamp: '2021-03-12 14:08',
          tweetId: '1'
        },
      ]);
    });
};
