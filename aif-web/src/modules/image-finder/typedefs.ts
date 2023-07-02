import { ColumnDefs } from "@aif-packages/simple-table";
import { PhotoDTO } from "@aif-packages/typedefs";

export type ImageTableMeta = {
  onClickToShowImage: (imageUrl: string) => void;
};

export type ImageColumnDefs = ColumnDefs<PhotoDTO, ImageTableMeta>;

export type FetchPhotosParams = {
  q: string;
  page: number;
};
