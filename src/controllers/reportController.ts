import { ReportModel } from "../models/reportModel";
import factory from "./handleFactory"

export default {
    getAllDangers: factory.getAll(ReportModel),
    getOne: factory.getOne(ReportModel),
    deleteOne: factory.deleteOne(ReportModel),
    patchOne: factory.patchOne(ReportModel),
    createOne: factory.createOne(ReportModel) 
}