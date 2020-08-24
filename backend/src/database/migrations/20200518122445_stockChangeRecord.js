//o trabalhador poes
exports.up = function(knex) {
    return knex.schema.createTable('stockChangeRecord', function(t){
        t.string('product_id').notNullable();
        t.string('product_name').notNullable();
        t.integer('product_amount').notNullable();
        t.string('user_name').notNullable();
        //criar chave estrangeira
        //t.foreign('product_id').references('id').inTable('product');
        t.foreign('product_name').references('name').inTable('product');
        t.foreign('product_amount').references('amount').inTable('product');

    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('stockChangeRecord')
};

