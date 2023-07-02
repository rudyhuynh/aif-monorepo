import { gql } from "@apollo/client";
import { getGraphQLClient } from "./graphQLClient";
import {
  PhotosPage,
  PageQueryOptions,
  OperatorKindEnum,
} from "../types/generated-graphql-types";
import { PhotoDTO, GetPhotosResult } from "@aif-packages/typedefs";

export async function getPhotos(
  page: number = 1,
  limit: number = 50,
  q: string
): Promise<GetPhotosResult> {
  const client = getGraphQLClient();

  const options: PageQueryOptions = {
    paginate: { page, limit },
    ...(q && {
      operators: [
        {
          kind: OperatorKindEnum.Like,
          field: "title",
          value: q,
        },
      ],
    }),
  };

  const results = await client.query<{ photos: PhotosPage }>({
    variables: { options },
    query: gql`
      query ($options: PageQueryOptions) {
        photos(options: $options) {
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
  const totalCount = results?.data?.photos.meta?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / limit);

  const typedData = data.map((photo) => {
    let photoDTO: PhotoDTO = {
      id: photo?.id || "",
      title: photo!.title || "",
      url: photo!.url || "",
      thumbnailUrl: photo!.thumbnailUrl || "",
    };
    return photoDTO;
  });

  return { data: typedData, totalPages };
}
