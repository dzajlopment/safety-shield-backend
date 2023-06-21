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
        type: [Number],
        required: [true, "Coordinates are required"]
    },
    type:{
        type: String,
        required: [true, "Type is required"]
    }
})

export const DeviceModel = model("Device", deviceSchema)