import { ZoneModel } from "../models/zoneModel"
import factory from "./handleFactory"

export default {
    getAllDangers: factory.getAll(ZoneModel),
    getOne: factory.getOne(ZoneModel),
    deleteOne: factory.deleteOne(ZoneModel),
    patchOne: factory.patchOne(ZoneModel),
    createOne: factory.createOne(ZoneModel) 
}