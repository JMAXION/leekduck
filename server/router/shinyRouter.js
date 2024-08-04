import express from "express";
import * as controller from "../controller/shinyController.js";

const router = express.Router();

router.post("/", controller.getShiny);

export default router;
