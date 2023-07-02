import { useQuery } from "@tanstack/react-query";
import { GetPhotosResult } from "@aif-packages/typedefs";
import { fetchPhotos } from "../service/PhotoService";
import { FetchPhotosParams } from "../typedefs";

const initialPhotos: GetPhotosResult = {
  data: [],
  totalPages: 0,
};

export const usePhotos = ({ q, page }: FetchPhotosParams) => {
  const { data, isInitialLoading, isFetching, isSuccess, error } = useQuery({
    queryFn: () => fetchPhotos({ q, page }),
    queryKey: ["photos", q, page],
    initialData: initialPhotos,
  });

  const photos = data.data;
  const totalPages = data.totalPages;
  const errorMessage = (error as Error)?.message;
  const isLoading = isInitialLoading || isFetching;

  return { photos, totalPages, errorMessage, isLoading, isSuccess };
};
