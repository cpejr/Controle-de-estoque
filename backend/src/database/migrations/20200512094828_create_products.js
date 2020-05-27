
exports.up = function(knex) {
  return knex.schema.createTable('product', function(table){
    table.string('name').notNullable();
    table.date('shelfLife');
    table.string('location').notNullable();
    table.string('id').primary();
    table.string('type').notNullable();
    table.date('lastBuyDate').notNullable();
    table.decimal('lastBuyPrice').notNullable();
    table.integer('amount').notNullable();
    table.integer('allertAmount').notNullable();
    table.text('description');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('product');
};