import { Schema, model } from "mongoose";

const deviceSchema = new Schema({
    name:{
        type: String,
        required: [true, "Device name is required"]
    },
    description:{
        type: String,
        required: [true, "Description is required"]
    },
    coordinates:{
        type: [String],
        required: [true, "Coordinates are required"]
    }
})

export const DeviceModel = model("Device", deviceSchema)