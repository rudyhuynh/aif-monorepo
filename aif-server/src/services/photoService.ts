import { gql } from "@apollo/client";
import { getGraphQLClient } from "./graphQLClient";
import { PhotosPage } from "../types/generated-graphql-types";
import { PhotoDTO } from "@aif-packages/typedefs";

export async function getPhotos(): Promise<PhotoDTO[]> {
  const client = getGraphQLClient();
  const results = await client.query<{ photos: PhotosPage }>({
    query: gql`
      {
        photos {
          data {
            id
            title
            url
            thumbnailUrl
          }
          meta {
            totalCount
          }
        }
      }
    `,
  });
  const data = results?.data?.photos?.data || [];

  return data.map((photo) => {
    let photoDTO: PhotoDTO = {
      id: photo?.id || "",
      title: photo!.title || "",
      url: photo!.url || "",
      thumbnailUrl: photo!.thumbnailUrl || "",
    };
    return photoDTO;
  });
}
