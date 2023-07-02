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
  const url = "/api/photos?" + qs.stringify({ q, page });
  console.log("url", url);
  console.log("\t fetch", fetch, window.fetch);
  const [data, status] = await fetch<GetPhotosResult>(url);
  if (status === 200) {
    return data;
  } else {
    throw new Error("Fail to fetch photos");
  }
}
