
exports.up = function(knex) {
  return knex.schema.createTable('Medic', (table)=>{
      table.string('id').primary();
      table.decimal('crm').notNullable();
      table.string('name').notNullable();
      table.string('contact').notNullable();
      table.string('streat').notNullable();
      table.decimal('number').notNullable();
      table.string('city').notNullable();
      table.string('uf').notNullable();
      table.string('cpf').notNullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Medic')
};
