exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('emails', (table) => {
      table.increments('id').primary();
      table.string('email').unique();
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('emails'),
  ])
};
