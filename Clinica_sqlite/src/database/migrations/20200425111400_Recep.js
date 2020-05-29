
exports.up = function(knex) {
  return knex.schema.createTable('Recep', (table)=> {
      table.string('date');
      table.string('prescription');

      // table.foreign('id_pacient').references('id').inTable('Pacient')
      // table.foreign('id_medic').references('id').inTable('Medic')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Recep')
};
