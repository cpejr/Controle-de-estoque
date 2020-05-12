
exports.up = function(knex) {
  return knex.schema.createTable('product', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('shelfLife');
    table.string('location').notNullable();
    table.string('type').notNullable();
  });
};

exports.down = function(knex) {
  
};
