import mongoose from "mongoose"

const medicalRedordSchema = new mongoose.Schema({

}, {timestamps:true})


export const MedicalRecord = mongoose.model("MedicalRecord", medicalRedordSchema)