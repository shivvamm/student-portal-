const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
        },
        name:{
            type:String,
            required:true,
            unique:true,
        },
        lastname:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        rollno:{
            type:Number,
            required:false,
        },
        year:{
            type:Number,
            required:true,
        },
        branch:{
            type:String,
            required:true,
        },
    },
    {timestamps:true}
);
module.exports=mongoose.model("User",UserSchema);
// database for users