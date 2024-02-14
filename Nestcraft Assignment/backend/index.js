import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from "dotenv"
import mongoose from 'mongoose'
import router from "./Routes/index.js"

const app = express()

app.use(morgan("dev"))
app.use(cors())
dotenv.config()
app.use(express.json())

app.get("/",function(req ,res){
    res.send('successfully started server')
})

app.use('/api/v1',router)

mongoose.connect(process.env.MONGO_URL).then(console.log('MongoDb connected'))
app.listen(process.env.PORT ,()=> console.log(`backend started on port ${process.env.PORT}`))
