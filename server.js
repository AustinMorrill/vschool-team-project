const express = require("express")
const app = express()
const cors = require('cors')
require("dotenv").config()
const PORT = process.env.PORT
const mongoose = require("mongoose")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use((err, request, response, next) => {
    console.log(err)
    return response.send("There was an error")
})

app.use("/menu", require("./routes/menuRoutes"))
app.use("/mail", require("./routes/mailRoutes"))

mongoose.connect("mongodb://localhost:27017/cc-menu", 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, () => {
        console.log("Connected to MongoDB")
    })

app.listen(PORT, () => {
    console.log(`Server Connected on Port: ${PORT}`)
})