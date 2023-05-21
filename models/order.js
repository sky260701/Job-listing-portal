const mongoose = require('mongoose') ;

 const OrderSchema = new mongoose.Schema({
    userId :{ type: String ,required : true} ,
    products : [
        {
            productId : {type: String} ,
            quantity : {type : Number ,default : 1} ,
            imagesrc : {type : String} ,
            section : {type : String} ,
            price : {type : String} ,
            description : {type : String} ,
            productname : {type : String} 
        }
    ] ,
    address : {type : String ,required : true} ,
    status : { type : String , default :'pending' , required : true}
 }, {timestamps : true})

mongoose.models = {}
 export default  mongoose.model("order" ,OrderSchema)
 