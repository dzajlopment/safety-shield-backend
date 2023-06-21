import express from "express"
import dangerController from "../controllers/dangerController"

const router = express.Router();

router.route("/")
    .post(dangerController.createOne)
    .get(dangerController.getAllDangers)

router.route("/:id")
    .get(dangerController.getOne)
    .delete(dangerController.deleteOne)
    .patch(dangerController.patchOne)

export default router;