
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "Tabatha", password: 'Testie123'},
        {username: "SusanBantoni", password: 'Testie123'},
        {username: "Richard", password: 'Testie123'},

        
      ]);
    });
};
