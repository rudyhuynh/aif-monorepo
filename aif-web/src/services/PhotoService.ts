import { PhotoDTO } from "@aif-packages/typedefs";
import { fetch } from "../utils/fetch";

export async function fetchPhotos(): Promise<PhotoDTO[]> {
  const [data, status] = await fetch<PhotoDTO[]>("/api/photos");
  if (status === 200) {
    return data;
  } else {
    throw new Error("Fail to fetch photos");
  }
}

//
