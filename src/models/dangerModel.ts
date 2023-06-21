import mongoose, { Schema, model } from "mongoose";

const dangerSchema = new Schema({
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
    coordinates:[{
        type: String,
        required: [true, "Coordinates are required"]
    }],
    description:{
        type: String,
        required: [true, "Description is required"]
    }
})

export const DangerModel = model("Danger", dangerSchema);