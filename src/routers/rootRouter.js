import express from "express";
import { home } from "../controllers/songController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/mostPlayed", mostPlayed);

export default rootRouter;
