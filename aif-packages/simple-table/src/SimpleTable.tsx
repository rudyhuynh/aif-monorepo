export type ColumnDef<TRow, TMeta> = {
  id: string;
  title: string;
  cell: (item: TRow, meta?: TMeta) => React.ReactNode;
};

export type ColumnDefs<TRow, TMeta> = Array<ColumnDef<TRow, TMeta>>;

export type TableProps<TRow, TMeta> = {
  columnDefs: Array<ColumnDef<TRow, TMeta>>;
  data: Array<TRow>;
  meta?: TMeta | undefined;
};

/**
 * A Simple Table component that takes in column definitions and data,
 * then renders a simple table element.
 *
 * For more complex datagrid visualization,
 * consider using Headless UI library like TanStack Table
 */
export const SimpleTable = <T extends Object, TA = undefined>({
  columnDefs,
  data,
  meta,
}: TableProps<T, TA>) => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          {columnDefs.map((columnDef) => {
            return <th key={columnDef.id}>{columnDef.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          return (
            <tr key={i}>
              {columnDefs.map((columnDef) => {
                return <td key={columnDef.id}>{columnDef.cell(item, meta)}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
