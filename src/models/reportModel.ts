import { Schema, model } from "mongoose";
import validCoordinates from "../utils/validCoordinates";

const reportSchema = new Schema({
    name:{
        type: String,
        required: [true, "Type is required"]
    },
    device:{
        type: String,
        required: [true, "Device is required"]
    },
    severity:{
        type: String,
        required: [true, "Severity is required"]
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
    description:{
        type: String,
        required: [true, "Description is required"]
    }
})

export const ReportModel = model("Report", reportSchema);