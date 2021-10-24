exports.up = function (knex) {
  return knex.schema
    .createTable('project', (table) => {
      table.increments('id', { primaryKey: true });
      table.string('name').notNullable();
      table.string('responsible').notNullable();
      table.float('reliability_percentage', 2).default(100);
      table.integer('hours_effort').unsigned().notNullable();
      table.timestamps(true, true);

      table
        .integer('fk_provider')
        .unsigned()
        .notNullable();
    })
    .alterTable('project', (table) => {
      table.unique('name');
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project')
};
