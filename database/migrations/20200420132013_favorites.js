exports.up = function (knex) {
	return knex.schema.createTable("favorites", (t) => {
		t.increments("fid").primary();

		t.enu("personal_rating", [
			"Loved It",
			"Liked It",
			"Okay",
			"Not a Fan",
			"Hated It"
		]).defaultTo("Just Okay");

		t.boolean("have_tried").defaultTo(false);

		t.text("notes", 3000).defaultTo('How was it?');

		t.integer("user_id")
			.unsigned()
			.references("users.id")
			.notNullable()
			.onUpdate("NO ACTION")
			.onDelete("NO ACTION");

		t.integer("strain_id")
			.unsigned()
			.references("strains.id")
			.notNullable()
			.onUpdate("NO ACTION")
			.onDelete("NO ACTION");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("favorites");
};
