const mongoose=require("mongoose")

const User= new mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String},
    age:{type:Number},
    role:{type:String,enum:["admin","user"] ,default:"user"},
    img: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
})

module.exports=mongoose.model('User',User)