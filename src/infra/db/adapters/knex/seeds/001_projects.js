exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {
          name: 'Make Hawks great again',
          responsible: 'Trae Young',
          hours_effort: 3000,
          fk_provider: 2,
        },
        {
          name: 'Stop the Atlanta power trio',
          responsible: 'Giannis Antetokounmpo',
          hours_effort: 5000,
          fk_provider: 3,
        },
        {
          name: 'Deal with the missing Kyrie Irving',
          responsible: 'Kevin Durant',
          hours_effort: 2500,
          fk_provider: 1,
        },
      ]);
    });
};
