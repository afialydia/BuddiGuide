const db = require("../../database/dbConfig");

module.exports = {
	create,
	findBy,
	findById,
	getFavorites,
	getFavoriteById,
	updateFavorite,
	deleteFavorite
};

//user crud
async function create(user) {
	const [id] = await db("users").insert(user, "id");

	return findUser(id);
}

function findBy(filter) {
	return db("users").where(filter);
}

function findById(id) {
	return db("users").where({ id }).first();
}

//favorites crud

function getFavorites(user_id) {
	return db("favorites").where({user_id});
}

function getFavoriteById(id) {
	return db("favorites").where({ id }).first();
}

function updateFavorite(id, update) {
	return db("favorites").where({ id }).update(update);
}

function deleteFavorite(id){
	return db('favorites').where({id}).del()
}