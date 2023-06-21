import express from "express"
import deviceController from "../controllers/deviceController"

const router = express.Router();

router.route("/")
    .post(deviceController.createOne)
    .get(deviceController.getAllDangers)

router.route("/:id")
    .get(deviceController.getOne)
    .delete(deviceController.deleteOne)
    .patch(deviceController.patchOne)

export default router;