import { Schema, model } from "mongoose";

const zoneSchema = new Schema({
    coordinates: {
        type: [Number],
        required: [true, "Coordinates are required"]
    },
    signs: {
        type:[String],
    },
    name:{
        type:String,
    }
})

export const ZoneModel = model("Zone", zoneSchema)