import { Schema, model } from "mongoose";

const reportSchema = new Schema({
    name:{
        type: String,
        required: [true, "Type is required"]
    },
    device:{
        type: String,
    },
    severity:{
        type: String,
        required: [true, "Severity is required"]
    },
    coordinates:{
        type: [Number],
        required: [true, "Coordinates are required"]
    },
    description:{
        type: String,
        required: [true, "Description is required"]
    }
})

export const ReportModel = model("Report", reportSchema);