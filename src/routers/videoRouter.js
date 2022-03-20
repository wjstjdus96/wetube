import express from "express";
import {
  upload,
  deleteViedeo,
  watch,
  getEdit,
  postEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id/edit", getEdit);
videoRouter.post("/:id/edit", postEdit);
videoRouter.get("/:id/delete", deleteViedeo);
videoRouter.get("/upload", upload);

export default videoRouter;
