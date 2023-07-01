import { useQuery } from "@tanstack/react-query";
import { fetchPhotos } from "../../../services/PhotoService";
import { PhotoDTO } from "@aif-packages/typedefs";

const initialPhotos: PhotoDTO[] = [];

export const ImageList = () => {
  const {
    data: photos,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => fetchPhotos(),
    queryKey: ["photos"],
    initialData: initialPhotos,
  });

  console.log("photos", photos);
  return <div>Image List</div>;
};
