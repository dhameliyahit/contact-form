const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const contactRoute = require("./routes/contactRoute.js")
const connectDB = require("./DB/connectDB.js")
const PORT = process.env.PORT || 5000

connectDB(process.env.DB_URL)
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
// home route
app.get("/",(req,res)=>{
    res.end("<h1>CURD</h1>")
})

app.use("/api/v1",contactRoute)


app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ${PORT}`)
})