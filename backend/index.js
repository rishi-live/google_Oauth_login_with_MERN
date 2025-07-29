const express = require("express");
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 8080;
const authRouter = require("./routes/authRouter")

require("./models/dbConnection")
const cors = require("cors");
app.use(cors());



app.get("/", (req, res) => {
    res.send("welcome back on the game")
})
app.use("/auth", authRouter)

app.listen(PORT, ()=>{
    console.log("server running", PORT);
})