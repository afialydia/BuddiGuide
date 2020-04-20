exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("favorites")
		// .del()
		.then(function () {
			// Inserts seed entries
			return knex("favorites").insert([
				{
					personal_rating: "Loved It",
					have_tried: false,
					notes: "So good. I really enjoyed it",
					user_id: 1,
					strain_id: 32
				}
	
			]);
		});
};
