const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authenticate = require("../middleware/authenticate");
const { jwtSecret } = require("../middleware/config");
const verify_cred = require("../middleware/verify_cred");
const verify_unique = require("../middleware/verify_unique");
const verify_user = require("../middleware/verify_user");
const verify_ownership = require("../middleware/verify_ownership");

const Users = require("../models/user_model");

router.post("/register", verify_cred, verify_unique, (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 12);
	user.password = hash;

	Users.create(user)
		.then((saved) => {
			const token = signToken(saved);
			res
				.status(201)
				.json({ token, saved, message: `Welcome ${saved.username}!` });
		})
		.catch((err) => {
			res
				.status(500)
				.json({ message: `looks like something broke in the router ${err}` });
		});
});

router.post("/login", verify_cred, (req, res) => {
	let { username, password } = req.body;
	console.log("user", username, password);
	Users.findBy({ username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = signToken(user);

				res.status(200).json({
					token,
					user,
					message: `Welcome ${user.username}!`,
				});
			} else {
				res.status(401).json({
					message:
						"Something went wrong. Please verify your password is correct.",
				});
			}
		})
		.catch((error) => {
			res
				.status(500)
				.json({ message: `Sorry bud, there's an issue with login: ${error}` });
		});
});

//Get customer by ID
router.get("/:user_id", authenticate, verify_user, (req, res) => {
	const { user_id } = req.params;

	Users.findById(user_id)
		.then((user) => res.status(200).json(user))
		.catch((err) =>
			res
				.status(500)
				.json({ message: `looks like something broke in the router ${err}` })
		);
});

// router.delete("/:user_id", authenticate, verify_user, (req, res) => {
// 	const user_id = req.params;

// 	Users.deleteUser(parseInt(user_id)
// 		.then(user => res.status(200).json({message: 'User has been deleted', user}))
// 		.catch(err => res.status(500).json({message: `Sorry that didn't work ${err}`}));
// });

//Get all of a customer's favorites
router.get("/:user_id/favorites", authenticate, verify_user, (req, res) => {
	const { user_id } = req.params;
	Users.getFavorites(user_id)
		.then((favorites) => {
			if (favorites[0]) {
				res.status(200).json({ favorites });
			} else {
				res
					.status(200)
					.json({ favorites, message: "User currently has no favorites." });
			}
		})
		.catch((err) =>
			res
				.status(500)
				.json({ message: `looks like something broke in the router ${err}` })
		);
});

//get favorite by id
router.get(
	"/:user_id/favorites/:fid",
	authenticate,
	verify_user,
	(req, res) => {
		const { user_id, fid } = req.params;

		Users.getFavoriteById(user_id, fid)
			.then((favorite) => {
				if (favorite.length > 0) {
					res.status(200).json({ favorite });
				} else {
					res.status(404).json({
						message: `No favorite found by this user with the id of ${fid}.`,
					});
				}
			})
			.catch((err) =>
				res.status(500).json({ message: `looks like something broke ${err}` })
			);
	}
);

//Allows a user to update a favorite by id
router.put(
	"/:user_id/favorites/:fid",
	authenticate,
	verify_user,
	verify_ownership,
	(req, res) => {
		const { user_id, fid } = req.params;
		const update = req.body;

		Users.updateFavorite(fid, update)
			.then((updated) =>
				res
					.status(200)
					.json({ message: `Favorite updated successfully`, updated })
			)
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	}
);

// //Delete a user's favorite by id
router.delete(
	"/:user_id/favorites/:fid",
	authenticate,
	verify_user,
	verify_ownership,
	(req, res) => {
		const { fid } = req.params;

		Users.deleteFavorite(fid)
			.then((favorite) =>
				res
					.status(200)
					.json({ message: "Favorite successfully deleted", favorite })
			)
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	}
);

function signToken(user) {
	const payload = {
		id: user.id,
		username: user.username,
	};

	const options = {
		expiresIn: "7d",
	};

	return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
