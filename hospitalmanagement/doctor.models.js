import mongoose from "mongoose"

const doctorsSchema = new mongoose.Schema({

}, {timestamps:true})


export const Doctor = mongoose.model("Doctor", doctorsSchema)