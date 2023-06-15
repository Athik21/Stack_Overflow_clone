import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/Users.js';
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: "true"}))
app.use(cors());

app.get("/",(req,res) => {
    res.send("This is a stack overflow clone API")
})

app.use("/user", userRoutes)
app.use("/questions", questionRoutes)
app.use("/answer", answerRoutes);

const PORT = process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL
// "mongodb://admin:admin@ac-bm83omy-shard-00-00.cyeu1fc.mongodb.net:27017,ac-bm83omy-shard-00-01.cyeu1fc.mongodb.net:27017,ac-bm83omy-shard-00-02.cyeu1fc.mongodb.net:27017/?ssl=true&replicaSet=atlas-91nhwd-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect( DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((err)=> console.log(err.message))
