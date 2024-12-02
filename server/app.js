import express from "express";
import {connectDB} from "./database/db.js"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

//APP

const app = express();
const PORT = process.env.PORT;

//EXPRESS AND CORS 

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(cors());

//APP ROUTES


app.listen(PORT, () => { 
  console.log(`Server is running on localhost:${PORT}`);
  connectDB();
});