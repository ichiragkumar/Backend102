import mongoose from "momgoose"
import { mongo } from "mongoose"


const orderItemSchema = new mongoose.Schema({
  prodictId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  },
  quantity:{
    type:Number,
    required:true,
  }
})

const orderSchema = new mongoose.Schema({
  orderPrice:{
    type:Number,
    required:true,
  },
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
  },
  orderItems :{
    type:[orderItemSchema]
  },
  address:{
    type:String,
    required:true,
  }

}, {timestamps:true})


export const Product = mongoose.model("Order", orderSchema)