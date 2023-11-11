import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const mongoUrl = process.env.MONGO_DB_URL

export const connectToMongo = async()=>{
    await mongoose
        .connect(mongoUrl)
        .then(()=>{
            console.log("Data base connect sucessfully.")
        })
        .catch((error)=>{
            console.log(error.message)
        })
}




