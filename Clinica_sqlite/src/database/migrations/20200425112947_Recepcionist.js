
exports.up = function (knex) {
    return knex.schema.createTable('Recepcionist', (table) => {
        table.string('id').primary();
        table.string('name');
        table.string('contact');
        table.string('streat');
        table.decimal('number');
        table.string('city');
        table.string('uf');
        table.string('cpf');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('Recepcionist')
};
