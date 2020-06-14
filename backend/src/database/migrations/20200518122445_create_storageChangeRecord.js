
exports.up = function(knex) {
    return knex.schema.createTable('storageChangeRecord', function(table){
        table.increments().primary();
        // table.string('product_id').notNullable().defaultTo('id do produto não encontrado').references('id').inTable('product');
        // table.string('product_name').notNullable().defaultTo('nome do produto não encontrado').references('name').inTable('product');
        // table.integer('product_amount').notNullable().defaultTo('quantidade não encontrado').references('amount').inTable('product');
        // table.string('user_name').notNullable().defaultTo('nome do usuário não encontrado').references('userName').inTable('userData');
        table.date('updated_at');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('storageChangeRecord');
};

