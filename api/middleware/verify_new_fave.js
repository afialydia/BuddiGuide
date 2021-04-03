const Users = require("../models/user_model");

module.exports = (req, res, next) => {
	const { strain_id } = req.params;
	const { user_id } = req.body;
	var flag;
	let data = [];

	Users.getFavorites(user_id)
		.then((favorites) => {
			if (favorites.length < 1) {
				next();
			} else {
				favorites.forEach((favorite) => {
					if (favorite.strain_id == strain_id) {
						flag = true;
						data.push(favorite);
					}
				});
				if (flag) {
					return res.status(400).json({
						message: `User has already favorited this strain.`,
					});
				} else {
					next();
				}
			}
		})

		.catch(() =>
			res.status(500).json({ error: "There was an error finding the user." })
		);
};
