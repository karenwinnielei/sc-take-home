exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tweets')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tweets').insert([
        {
          message: 'hello world',
          author: 'karen',
          timestamp: '2021-03-12 14:03',
        },
      ]);
      
    });
};
