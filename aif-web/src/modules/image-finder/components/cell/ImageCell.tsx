type ImageCellPropsType = {
  url: string;
  onClick?: () => void;
};

export const ImageCell = ({ url, onClick }: ImageCellPropsType) => {
  return <img className="cursor-pointer" onClick={onClick} src={url} />;
};
