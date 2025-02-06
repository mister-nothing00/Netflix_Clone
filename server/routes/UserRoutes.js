const express = require("express");
const router = express.Router();
const { addToLikedMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/UserController.js");


router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies);
<<<<<<< HEAD
router.put("/update", removeFromLikedMovies)
=======
router.delete("/delete", removeFromLikedMovies)
>>>>>>> 941b8040b3104a130347ef58fd31f29469caa0ef

module.exports= router;
