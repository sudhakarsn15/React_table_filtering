import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import {
  COLUMNS
  //  GROUPED_COLUMNS
} from "./columns";
import { useMemo } from "react";
import "./table.css";

export const BasicTable = () => {
  /**
   * uncomment line colums line to get grouped elements
   */
  // const columns = useMemo(() => GROUPED_COLUMNS, []);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroups) => (
          <tr {...headerGroups.getHeaderGroupProps()}>
            {headerGroups.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {" "}
                {column.render("Header")}
                {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}> {cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
