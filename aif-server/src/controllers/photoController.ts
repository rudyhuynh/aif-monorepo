import { Request, Response } from "express";
import * as photoService from "../services/photoService";

export async function getPhotos(req: Request, res: Response) {
  try {
    const query = (req.query || {}) as any;
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 50;
    const q = query.q as string;

    const results = await photoService.getPhotos(page, limit, q);
    res.json(results);
  } catch (e) {
    console.error(JSON.stringify(e, null, 2));
    res.status(500).json({ error: "Fail to get photos" });
  }
}
