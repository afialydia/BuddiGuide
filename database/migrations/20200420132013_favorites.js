exports.up = function (knex) {
	return knex.schema.createTable("favorites", (t) => {
		t.increments("id").primary();

		t.enu("personal_rating", [
			"Loved It",
			"Liked It",
			"Okay",
			"Not a Fan",
			"Hated It"
		]).notNullable().defaultTo("Just Okay");

		t.boolean("have_tried").defaultTo(false);

		t.text("notes", 3000).notNullable();

		t.integer("user_id")
			.unsigned()
			.references("users.id")
			.notNullable()
			.onUpdate("CASCADE")
			.onDelete("CASCADE");

		t.integer("strain_id")
			.unsigned()
			.references("strains.id")
			.notNullable()
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("favorites");
};
