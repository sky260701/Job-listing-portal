import mongoose from "mongoose";

console.log(process.env.MONGO_URI)
const connectdb = handler => async (req ,res) => {
 if (mongoose.connections[0].readyState) {
         return handler(req ,res) ;
 } else {
    console.log(process.env.MONGO_URI)
     await mongoose.connect(process.env.MONGO_URI)
     return handler(req ,res) ;
 }
}

export default connectdb