import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db";

dotenv.config();

//APP

const app= express();
const PORT = process.env.PORT ;

app.listen(`${PORT}`, ()=>{
    console.log(`Server is running on localhost:${PORT}`)
    connectDB();
})