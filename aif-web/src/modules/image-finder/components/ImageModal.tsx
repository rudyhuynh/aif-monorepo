import { Modal } from "@aif-packages/modal";
import { useState } from "react";
import { Loader } from "./Loader";

import "./ImageModal.css";

type ImageModalPropsType = {
  onClose: () => void;
  imageUrl: string;
};

export const ImageModal = ({ onClose, imageUrl }: ImageModalPropsType) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Modal
      onClose={onClose}
      content={
        <div className="image-modal overflow-auto relative">
          {isLoading && <Loader />}
          <img src={imageUrl} onLoad={() => setIsLoading(false)} />
        </div>
      }
    />
  );
};
