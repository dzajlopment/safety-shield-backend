import express from "express"
import zoneController from "../controllers/zoneController";

const router = express.Router();

router.route("/")
    .post(zoneController.createOne)
    .get(zoneController.getAllDangers)

router.route("/:id")
    .get(zoneController.getOne)
    .delete(zoneController.deleteOne)
    .patch(zoneController.patchOne)

export default router;