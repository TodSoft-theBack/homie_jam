require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.BACKEND_PORT
console.log(PORT)
app.route("/").get((req, res)=>{
    res.json({message: "ok"})
})
app.listen(PORT)