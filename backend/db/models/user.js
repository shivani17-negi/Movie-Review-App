const mongoose = require('mongoose');
const { use } = require('../../Routes/user');
const userSchema  = mongoose.Schema({
    name:{
   type:String,
   trim:true,
   required:true

    },
    email:{
   type:String,
   trim:true,
   required:true,
   unique:true



    },
    password:{
    type:String,
    required:true,
    }






});

module.exports = mongoose.model("User",userSchema);