const express = require("express");
const connectDB = require("./database/db.js");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const dotenv = require("dotenv");
const path= require("path")

dotenv.config();

//APP

const app = express();
const PORT = process.env.PORT;

//EXPRESS AND CORS

app.use(express.json());
app.use(cors());

//APP ROUTES

app.use("/api/user", userRoutes);





app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
  connectDB();
});
