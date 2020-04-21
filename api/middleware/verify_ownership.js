const Users = require("../models/user_model");

module.exports = (req, res, next) => {
	const { user_id, fid } = req.params;
	Users.getFavoriteById(user_id, fid)
		.then((favorite) => {
			if (favorite.length > 0) {
				next();
			} else {
				res
					.status(404)
					.json({
						message: `No favorite found by this user with the id of ${fid}.`,
					});
			}
		})
		.catch(() =>
			res.status(500).json({ error: "There was an error finding the user." })
		);
};
