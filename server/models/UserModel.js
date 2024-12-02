const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, // Assicurati che sia "required" e non "require"
    unique: true,
    max: 50,
  },
  likedMovies: {
    type: [String], // Specifica che likedMovies è un array di stringhe
    default: [], // Imposta un valore predefinito se necessario
  },
});

// Usa mongoose.model per creare e esportare il modello
module.exports = mongoose.model("User ", userSchema); // Corretto "users" in "User "