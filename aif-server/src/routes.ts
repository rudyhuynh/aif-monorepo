import { Application } from "express";
import * as photoController from "./controllers/photoController";

export function routes(app: Application) {
  app.get("/api/photos", photoController.getPhotos);

  // more routes here
}
