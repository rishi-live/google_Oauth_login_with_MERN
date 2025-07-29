const mongoose = require("mongoose");


const DB_URL = process.env.DB_URL;


mongoose.connect(DB_URL).then(()=>{
    console.log("DB connected now...");
}).catch((err) => {
    console.log("Error in DB connection", err);
})