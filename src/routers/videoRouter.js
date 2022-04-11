import express from "express";
import {
  upload,
  deleteViedeo,
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
// videoRouter.get("/:id/edit", getEdit);
// videoRouter.post("/:id/edit", postEdit);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id/delete", deleteViedeo);

export default videoRouter;
