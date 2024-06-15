import mongoose from "mongoose"

const doctorsHoursinMultipleHospital = new mongoose.Schema({
    hoursWorkd:{
        type:Number,
        required:true
    },
    patientManaged:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient"
    }
})

const doctorsSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    salary:{
        type:String,
        required:true,
    },
    qualification:{
        type:String,
        required:true,
    },
    exeprienceinYear:{
        type:Number,
        default:0,
    },
    worksInHospital:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        },
        doctorsHoursinMultipleHospital,
        

    ]


}, {timestamps:true})


export const Doctor = mongoose.model("Doctor", doctorsSchema)