import qs from "qs";
import { GetPhotosResult } from "@aif-packages/typedefs";
import { fetch } from "../utils/fetch";

type FetchPhotosParams = {
  q: string;
  page: number;
};

export async function fetchPhotos({
  q,
  page,
}: FetchPhotosParams): Promise<GetPhotosResult> {
  const [data, status] = await fetch<GetPhotosResult>(
    "/api/photos?" + qs.stringify({ q, page })
  );
  if (status === 200) {
    return data;
  } else {
    throw new Error("Fail to fetch photos");
  }
}
