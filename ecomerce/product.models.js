import mongoose from "momgoose"


const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,

  },

  productImage:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    default:0,

  },
  stocks:{
    type:Number,
    default:1,
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true,
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
  }


},{timestamps:true})

export const Product = mongoose.model("Product", productSchema)