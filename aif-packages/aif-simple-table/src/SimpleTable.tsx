type ColumnDef<TRow> = {
  id: string;
  title: string;
  cell: (item: TRow) => React.ReactNode;
};

type TableProps<TRow> = {
  columnDefs: Array<ColumnDef<TRow>>;
  data: Array<TRow>;
};

/**
 * A Simple Table component that takes in column definitions and data,
 * then renders a simple table element.
 * For more complex datagrid visualization,
 * consider using Headless UI library like TanStack Table
 */
export const Table = <T extends Object>({
  columnDefs,
  data,
}: TableProps<T>) => {
  return (
    <table className="table">
      <thead>
        {columnDefs.map((columnDef) => {
          return <th key={columnDef.id}>{columnDef.title}</th>;
        })}
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr>
              {columnDefs.map((columnDef) => {
                return <td>{columnDef.cell(item)}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
