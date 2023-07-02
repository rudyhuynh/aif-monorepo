type IDCellPropType = {
  id: string;
  onClick?: () => void;
};

export const IDCell = ({ id, onClick }: IDCellPropType) => {
  return (
    <span
      data-testid={`IDCell-${id}`}
      className="cursor-pointer underline"
      onClick={onClick}
    >
      {id}
    </span>
  );
};
