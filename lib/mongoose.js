import mongoose from "mongoose"

const connectionToDB = async () =>{
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MongoURL)
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectionToDB