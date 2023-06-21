import { DangerModel } from "../models/dangerModel";
import factory from "./handleFactory"

export default {
    getAllDangers: factory.getAll(DangerModel),
    getOne: factory.getOne(DangerModel),
    deleteOne: factory.deleteOne(DangerModel),
    patchOne: factory.patchOne(DangerModel),
    createOne: factory.createOne(DangerModel) 
}