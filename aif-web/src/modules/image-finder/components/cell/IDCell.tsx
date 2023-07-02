type IDCellPropType = {
  id: string;
  onClick?: () => void;
};

export const IDCell = ({ id, onClick }: IDCellPropType) => {
  return (
    <span className="cursor-pointer underline" onClick={onClick}>
      {id}
    </span>
  );
};
