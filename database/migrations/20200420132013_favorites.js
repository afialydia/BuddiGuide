exports.up = function (knex) {
	return knex.schema.createTable("favorites", (t) => {
		t.increments("fid").primary();

		t.enu("personal_rating", [
			"Loved It",
			"Liked It",
			"Have Not Tried Yet",
			"Not a Fan",
			"Hated It"
		]).defaultTo("Have not Tried Yet");

		t.boolean("have_tried").defaultTo(false);

		t.text("notes", 3000).defaultTo("Anything you wanna know for next time can go here..");

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
