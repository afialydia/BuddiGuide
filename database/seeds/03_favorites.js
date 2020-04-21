exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("favorites")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("favorites").insert([
				{
					personal_rating: "Loved It",
					have_tried: true,
					notes: "So good. I really enjoyed it",
					user_id: 1,
					strain_id: 32
				},
				{
					personal_rating: "Hated It",
					have_tried: true,
					notes: "Too much feeling.",
					user_id: 1,
					strain_id: 203
				},
				{
					personal_rating: "Okay",
					have_tried: true,
					notes: "Was just ok. Wouldn't recommend taking at night.",
					user_id: 1,
					strain_id: 74
				}
	
			]);
		});
};
