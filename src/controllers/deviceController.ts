import { DeviceModel } from "../models/deviceModel";
import factory from "./handleFactory"

export default {
    getAllDangers: factory.getAll(DeviceModel),
    getOne: factory.getOne(DeviceModel),
    deleteOne: factory.deleteOne(DeviceModel),
    patchOne: factory.patchOne(DeviceModel),
    createOne: factory.createOne(DeviceModel) 
}