
exports.up = function(knex) {
  return knex.schema.createTable('userData', function(table){
    table.string('userName').notNullable();
    table.string('userType').notNullable();
    table.string('userCPF').unique();
    table.date('userDate').notNullable();
    table.string('password').notNullable();
    table.string('id').primary();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('userData')
};
