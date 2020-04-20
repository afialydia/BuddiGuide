
exports.up = function(knex) {
    return knex.schema.createTable('users', t => {
        t.increments("id").primary();
        t.string('username').unique().notNullable();
        t.string('password').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};

