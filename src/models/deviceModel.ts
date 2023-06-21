import { Schema, model } from "mongoose";
import validCoordinates from "../utils/validCoordinates";

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
        required: [true, "Coordinates are required"],
        validate:{
            validator: (value: number[]) => {
                return validCoordinates(value[0], value[1]);
            },
            message: "Invalid coordinates"
        }
    },
    type:{
        type: String,
        required: [true, "Type is required"]
    },
    zone:{
        type: String,
        required: [true, "Zone is required"]
    }
})

export const DeviceModel = model("Device", deviceSchema)