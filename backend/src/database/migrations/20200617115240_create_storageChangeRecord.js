exports.up = function(knex) {
    return knex.schema.createTable('storageChangeRecord', function(table){

        table.string('product_id').notNullable().defaultTo('erro');
        table.string('product_name').notNullable().defaultTo('erro').references('name').inTable('product');
        table.integer('changed').notNullable().defaultTo('erro');
        table.integer('newAmount').notNullable().defaultTo('erro');
        table.string('user_name').notNullable().defaultTo('erro').references('userName').inTable('userData');
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        //para restringir acesso 
        table.string('user_id').notNullable().defaultTo('erro').references('userType').inTable('userData');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('storageChangeRecord');
};
//uptade na tabela 