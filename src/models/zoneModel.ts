import mongoose, { Schema, model } from "mongoose";

const zoneSchema = new Schema({
    coordinates: {
        type:Array,
        required: [true, "Coordinates are required"]
    },
    signs: [{
        type:String,
    }],
    name:{
        type:String,
    }
})

export const ZoneModel = model("Zone", zoneSchema)