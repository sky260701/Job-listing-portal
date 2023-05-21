 
 const mongoose = require('mongoose') ;

 const ProductSchema = new mongoose.Schema({

    title :{ type: String ,required : true} ,
    productId : {type: String } ,
    quantity : {type : Number ,default : 1} ,
    imagesrc : {type : String} ,
    category : {type : String } ,
    price : {type : Number} ,
    description : {type : String} ,
             
       
   
 }, {timestamps : true})

      mongoose.models = {}
 export default  mongoose.model("product" ,ProductSchema)