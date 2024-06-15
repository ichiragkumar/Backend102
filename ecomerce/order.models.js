import mongoose from "momgoose"



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
  },
  status:{
    type:String,
    enum:["PENDING", "CANCELED", "DELLIVERED"],
    default:["PENDING"],
    
  }

}, {timestamps:true})


export const Order = mongoose.model("Order", orderSchema)