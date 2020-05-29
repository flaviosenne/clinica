
exports.up = function(knex) {
  return knex.schema.createTable('Pacient', (table)=> {
      table.string('id').primary();
      table.string('name');
      table.string('cpf');
      table.string('contact');
      table.string('streat');
      table.decimal('number');
      table.string('neighborhood');
      table.string('city');
      table.string('uf');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Pacient')
};
