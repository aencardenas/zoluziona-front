import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import data from "../data/product.json";

export default function ProductInfo() {
  const columns = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Data",
      accessorKey: "data",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="mx-7 flex justify-center">
        <table className="w-full">
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="flex-col align-top text-[12px] w-1/2 first:font-bold">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
