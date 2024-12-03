const express = require("express");
const connectDB = require("./database/db.js");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const dotenv = require("dotenv");

dotenv.config();

//APP

const app = express();
const PORT = process.env.PORT;

//EXPRESS AND CORS

app.use(express.json());
app.use(cors());

//APP ROUTES

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
  connectDB();
});
