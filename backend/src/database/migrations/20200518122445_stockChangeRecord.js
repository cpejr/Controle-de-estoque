
exports.up = function(knex) {
    return knex.schema.createTable('storageChangeRecord', function(table){
        table.string('product_id').notNullable();
        table.string('product_name').notNullable();
        table.integer('product_amount').notNullable();
        table.string('user_name').notNullable();
        table.date('lastChange_date').notNullable();
        //criar chave estrangeira
        table.foreign('product_id').references('id').inTable('product');
        table.foreign('product_name').references('name').inTable('product');
        table.foreign('product_amount').references('amount').inTable('product');
        table.foreign('user_name').references('userName').inTable('userData');

    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('storageChangeRecord');
};

