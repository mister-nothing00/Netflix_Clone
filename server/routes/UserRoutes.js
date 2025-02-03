
const { addToLikedMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/UserController.js");
const router = require("express").Router();

router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies);
router.delete("/delete", removeFromLikedMovies)

module.exports= router;
