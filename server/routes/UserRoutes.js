const express = require("express");
const router = express.Router();
const { addToLikedMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/UserController.js");


router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies);

router.put("/update", removeFromLikedMovies)

router.delete("/delete", removeFromLikedMovies)

module.exports= router;
