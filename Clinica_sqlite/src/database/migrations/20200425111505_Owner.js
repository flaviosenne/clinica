
exports.up = function(knex) {
  return knex.schema.createTable('Owner', (table)=> {
      table.string('id').primary();
      table.string('user')
      table.string('password')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Owner')
};
