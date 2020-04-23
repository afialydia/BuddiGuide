const router = require("express").Router();
const Strains = require("../models/strain_model");
const authenticate = require("../middleware/authenticate");

router.get("/", (req, res) => {
	Strains.findAllStrains()
		.then((strainData) => res.status(200).json(strainData))
		.catch((err) =>
			res.status(500).json({ message: "Looks like something broke", err })
		);
});

router.get("/:id", (req, res) => {
    const {id} = req.params
	Strains.findById(id)
		.then((strainData) => res.status(200).json(strainData))
		.catch((err) =>
			res.status(500).json({ message: `Looks like something broke: ${err}`})
		);
});


//Adds a favorite 
router.post("/:strain_id",
//  authenticate, 
 (req, res) => {
	 const {strain_id} = req.params
	 const favorite = {...req.body, strain_id};

	Strains.createFavorite(favorite)
		.then(console.log(favorite))
		.then(favorite => res.status(200).json({favorite}))
		.catch(err => {
			res.status(500).json({message: 'somethings wrong with this request',err});
		});
});


module.exports = router;
