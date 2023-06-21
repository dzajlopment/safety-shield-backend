import express from "express"
import reportController from "../controllers/reportController"

const router = express.Router();

router.route("/")
    .post(reportController.createOne)
    .get(reportController.getAllDangers)

router.route("/:id")
    .get(reportController.getOne)
    .delete(reportController.deleteOne)
    .patch(reportController.patchOne)

export default router;