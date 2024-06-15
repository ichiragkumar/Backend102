import mongoose from "mongoose"

const userSchema = new mongoose.Scehma({

  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,

  },

  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
  },

  passwword:{
    type:String,
    required:true,
  }
})


export const User = mongoose.model("User", userSchema)