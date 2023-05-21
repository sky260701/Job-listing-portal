const mongoose = require('mongoose') ;

 const UserSchema = new mongoose.Schema({
    username :{ type: String ,required : true} ,
    emailid :{ type: String ,required : true} ,
    password : {type : String , required : true} ,
   
 }, {timestamps : true})

mongoose.models = {}
 export default  mongoose.model("user" ,UserSchema)
 