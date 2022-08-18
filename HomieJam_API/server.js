require("dotenv").config()

const express = require("express")
const app = express()
const PORT = process.env.BACKEND_PORT



app.route("/").get((req, res)=>{
    res.json({message: "ok", data: "some shit"})
})
app.listen(PORT)