
exports.up = function(knex) {
  return knex.schema.createTable('Consultations', (table)=> {
      table.string('description');
      table.string('date')

      // table.foreign('id_pacient').references('id').inTable('Pacient')
      // table.foreign('id_medic').references('id').inTable('Medic')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Consultations')
};
