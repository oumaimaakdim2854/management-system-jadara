require("dotenv").config();

const connectDB=require("./config/db.js");

connectDB()

const express =require("express");
const app = express();
const port = process.env.PORT;


app.listen(port, () => {
    console.log(`Serverur demarre sur le port : ${port}`);
});