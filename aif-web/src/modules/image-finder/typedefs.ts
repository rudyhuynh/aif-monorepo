import { ColumnDefs } from "@aif-packages/simple-table";
import { PhotoDTO } from "@aif-packages/typedefs";

export type ImageTableMeta = {
  onClickToShowImage: (imageUrl: string) => void;
};

export type ImageColumnDefs = ColumnDefs<PhotoDTO, ImageTableMeta>;
