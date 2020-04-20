exports.up = function (knex) {
	return knex.schema.createTable("strains", (t) => {
		t.increments("id").primary();
		t.string("strain", 255).notNullable();
		t.string("type", 255).notNullable();
		t.string("effects", 255).notNullable();
		t.text("flavor", 255).notNullable();
		t.text("description", 3000).notNullable();
	});
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('strains');

};
