import { Schema, model } from "mongoose";
import validCoordinates from "../utils/validCoordinates";

const zoneSchema = new Schema({
    coordinates: {
        type: [[Number]],
        required: [true, "Coordinates are required"],
        validate:{
            validator: (value: number[]) => {
                return validCoordinates(value[0], value[1]);
            },
            message: "Invalid coordinates"
        }
    },
    signs: {
        type:[String],
    },
    name:{
        type:String,
        required: [true, "Name is required"]
    }
})

export const ZoneModel = model("Zone", zoneSchema)