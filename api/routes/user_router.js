const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authenticate = require("../middleware/authenticate");
const { jwtSecret } = require("../middleware/config");

const Users = require("../models/user_model");

router.post("/register", (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 12);
	user.password = hash;

	Users.create(user)
		.then((saved) => {
			res.status(201).json({ saved });
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.post("/login", (req, res) => {
	let { username, password } = req.body;

	Users.findBy({ username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = signToken(user);

				res.status(200).json({
					token,
					user: user,
					message: `Welcome ${user.username}!`,
				});
			} else {
				res.status(401).json({ message: "Invalid Credentials" });
			}
		})
		.catch((error) => {
			res
				.status(500)
				.json({ message: "sorry bud, there's an issue with login:", error });
		});
});

//Get customer by ID
router.get("/:id", authenticate, (req, res) => {
	const { id } = req.params;

	Users.findById(id)
		.then((user) => res.status(200).json(user))
		.catch((err) => res.status(500).json(err));
});

// //Update customer profile
// router.put("/:customerId", authenticate, verifyCustomer, (req, res) => {
// 	const id = req.params.customerId;
// 	const update = req.body;

// 	Customers.updateProfile(id, update)
// 		.then(customer => res.status(200).json(customer))
// 		.catch(err => res.status(500).json(err));
// });

//Get all of a customer's favorites
router.get("/:user_id/favorites", authenticate, (req, res) => {
	const { user_id } = req.params;

	Users.getFavorites(user_id)
		.then((favorites) => res.status(200).json({ favorites }))
		.catch((err) => res.status(500).json(err));
});

//get favorite by id
router.get("/:user_id/favorites/:id", authenticate, (req, res) => {
	const { id } = req.params;

	Users.getFavoriteById(id)
		.then((favorite) => res.status(200).json(favorite))
		.catch((err) => res.status(500).json(err));
});

//Allows a user to update a favorite by id
router.put("/:user_id/favorites/:id", authenticate, (req, res) => {
	const { id } = req.params;
	const update = req.body;

	Users.updateFavorite(id, update)
		.then((updated) => res.status(200).json({ updated }))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// //Delete a user's favorite by id
router.delete(
	"/:user_id/favorites/:id",
	authenticate,
	//  verifyCustomer, verifyReview,
	(req, res) => {
		const { id } = req.params;

		Users.deleteFavorite(id)
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
		subject: user.id,
		username: user.username,
	};

	const options = {
		expiresIn: "7d",
	};

	return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
