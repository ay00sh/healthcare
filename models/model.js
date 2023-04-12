const mongoose= require("mongoose")
const hospitalschema=new mongoose.Schema({
     name:{
         type:String,
        required:true
},
     email : {
         type:String,
         required:true,
         unique:true
     },
     password:{
         type:String,
        required:true
        }
 })

 module.exports= new mongoose.model("hospital",hospitalschema);
