import mongoose from "mongoose";

console.log(process.env.MONGO_URI)
const connectdb = handler => async (req ,res) => {
 if (mongoose.connections[0].readyState) {
         return handler(req ,res) ;
 } else {
    console.log(process.env.MONGO_URI)
     await mongoose.connect("mongodb+srv://akashdeshmukh3030:Akash%401234@cluster0.e3olq6a.mongodb.net/?retryWrites=true&w=majority")
     return handler(req ,res) ;
 }
}

export default connectdb