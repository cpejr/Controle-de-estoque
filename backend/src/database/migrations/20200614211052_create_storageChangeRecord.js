exports.up = function(knex) {
    return knex.schema.createTable('storageChangeRecord', function(table){
        table.string('product_id').primary().notNullable().defaultTo('erro').references('id').inTable('product');
        table.string('product_name').notNullable().defaultTo('erro').references('name').inTable('product');
        table.integer('product_amount').notNullable().defaultTo('erro').references('amount').inTable('product');
        table.string('user_name').notNullable().defaultTo('erro').references('userName').inTable('userData');
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.integer('amount_after').notNullable().defaultTo('erro');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('storageChangeRecord');
};