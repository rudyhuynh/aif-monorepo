export type PhotoDTO = {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type GetPhotosResult = {
  data: PhotoDTO[];
  totalPages: number;
};
