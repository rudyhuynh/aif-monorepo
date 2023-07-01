import { Request, Response } from "express";
import * as photoService from "../services/photoService";

export async function getPhotos(req: Request, res: Response) {
  try {
    const photos = await photoService.getPhotos();
    res.json(photos);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Fail to get photos" });
  }
}
