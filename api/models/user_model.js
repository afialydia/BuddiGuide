const db = require("../../database/dbConfig");

module.exports = {
	create,
	findBy,
	findById,
	// updateUser,
	// deleteUser,
	getFavorites,
	getFavoriteById,
	updateFavorite,
	deleteFavorite,
};

//user crud
async function create(user) {
	const [id] = await db("users").insert(user, "id");

	return findById(id);
}

function findBy(filter) {
	return db("users").where(filter);
}

function findById(id) {
	return db("users").where({ id }).first();
}

// function updateUser(id, update) {
	
// 	return db("users").where({ id }).update(update);
// }

// function deleteUser(id) {
// 	console.log(id)
// 	return db("users").where({ id }).del();
// }

//favorites crud

function getFavorites(user_id) {
	const faves = db("favorites")
		.select(
			"f.fid",
			"s.strain as strain",
			"s.type",
			"s.id as strain_id",
			"f.have_tried",
			"f.personal_rating",
			"f.notes"
		)
		.from("favorites as f")
		.join("strains as s", "s.id", "f.strain_id")
		.where({ user_id });

	return faves;
}


function getFavoriteById(user_id, fid) {

	const fave = db("favorites")
		.select(
			"f.fid as favorite_id",
			"s.strain as strain",
			"f.have_tried",
			"f.personal_rating",
			"f.notes"
		)
		.from("favorites as f")
		.join("strains as s", "s.id", "f.strain_id")
		.where({ user_id }).where({fid})
	
	return fave
}

function updateFavorite(fid, update) {
	return db("favorites").where({ fid }).update(update);
}

function deleteFavorite(fid) {
	return db("favorites").where({ fid }).del();
}
