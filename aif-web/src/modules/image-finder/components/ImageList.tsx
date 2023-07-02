import { SimpleTable } from "@aif-packages/simple-table";
import { Search } from "./Search";
import { Paging } from "./Paging";
import { Container } from "@aif-packages/layout";
import "./ImageList.css";
import { useSearchParams } from "react-router-dom";
import { Loader } from "./Loader";
import { ImageColumnDefs, ImageTableMeta } from "../typedefs";
import { useMemo, useState } from "react";
import { IDCell } from "./cell/IDCell";
import { ImageCell } from "./cell/ImageCell";
import { ImageModal } from "./ImageModal";
import { usePhotos } from "../hook/usePhotos";

const columnDefs: ImageColumnDefs = [
  {
    id: "id",
    title: "ID",
    cell: (item, meta) => {
      return (
        <IDCell
          id={item.id}
          onClick={() => meta?.onClickToShowImage(item.url)}
        />
      );
    },
  },
  {
    id: "title",
    title: "Title",
    cell: (item) => item.title,
  },
  {
    id: "thumbnail",
    title: "Thumbnail",
    cell: (item, meta) => {
      return (
        <ImageCell
          url={item.thumbnailUrl}
          onClick={() => meta?.onClickToShowImage(item.url)}
        />
      );
    },
  },
];

const initialSearchParams = new URLSearchParams({
  q: "",
  page: "1",
});

export const ImageList = () => {
  /**
   * We manage search and paging state of ImageList component using search params of the URL.
   * So that the those state are persisted on page refresh.
   *
   * By using useSearchParams and useQuery, the component state are easily accessed and updated globally,
   * hence we don't need Redux.
   */

  const [searchParams, setSearchParams] = useSearchParams(initialSearchParams);
  const q = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") as string) || 1;

  const { photos, totalPages, errorMessage, isLoading, isSuccess } = usePhotos({
    q,
    page,
  });

  const [showImageUrl, setShowImageUrl] = useState("");

  const tableMeta: ImageTableMeta = useMemo(() => {
    return {
      onClickToShowImage(imageUrl) {
        setShowImageUrl(imageUrl);
      },
    };
  }, []);

  const onSearch = (value: string) => {
    const nextSearchParams = new URLSearchParams(searchParams);
    nextSearchParams.set("q", value);
    nextSearchParams.set("page", "1");
    setSearchParams(nextSearchParams);
  };

  const onChangePage = (changedPage: number) => {
    const nextSearchParams = new URLSearchParams(searchParams);
    nextSearchParams.set("page", String(changedPage));
    setSearchParams(nextSearchParams);
  };

  const onCloseImageModal = () => {
    setShowImageUrl("");
  };

  return (
    <Container className="pt-3 d-flex flex-column h-100">
      <div>
        <Search
          key={q}
          initialValue={q}
          onSearch={onSearch}
          disabled={isLoading}
        />
      </div>
      <div className="flex-fill overflow-auto border-top border-bottom relative">
        {isLoading && <Loader />}

        {!isLoading && errorMessage && (
          <div className="text-danger pt-3 text-center">{errorMessage}</div>
        )}

        {!isLoading && !errorMessage && photos.length === 0 && (
          <div className="pt-3 text-center">No data available</div>
        )}

        {isSuccess && photos.length > 0 && (
          <SimpleTable data={photos} columnDefs={columnDefs} meta={tableMeta} />
        )}
      </div>
      <div>
        <Paging
          key={page}
          currentPage={page}
          totalPages={totalPages}
          onChangePage={onChangePage}
          disabled={isLoading}
        />
      </div>

      {showImageUrl && (
        <ImageModal onClose={onCloseImageModal} imageUrl={showImageUrl} />
      )}
    </Container>
  );
};
