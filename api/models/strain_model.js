const db = require("../../database/dbConfig");
const Users = require('./user_model')
module.exports = {
	findAllStrains,
	findById,
	createFavorite
};

function findAllStrains() {
	return db("strains").select(
		"id",
		"strain",
		"type",
		"effects",
		"flavor",
		"description"
	);
}

function findById(id) {
	return db("strains").where({ id }).first();
}

async function createFavorite(favorite) {
	const [id] = await db("favorites").insert(favorite, "id");

	return Users.getFavoriteById(id);
}