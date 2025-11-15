import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("Connnected to the DB")
    })
    .catch((err) => {
        throw err;
    })
}

const app = express()
app.listen(8800, () => {
    connect()
    console.log("Connected!")
})
