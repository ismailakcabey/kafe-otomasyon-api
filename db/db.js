import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb+srv://ismailakcabey:nodejs@denemedatabase.an06h.mongodb.net/?retryWrites=true&w=majority')
        console.log("connect successful")
    } catch (error) {
        console.log(error)
    }
}