
exports.up = function(knex) {
    return knex.schema.createTable('productList', function(table){
        table.string('productName').notNullable();
        table.string('productType').notNullable();
        table.string('productID').primary();
    }); 
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('productList')
};

