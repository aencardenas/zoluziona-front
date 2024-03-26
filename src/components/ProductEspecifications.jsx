import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import data from "../data/especifications.json";
import Especifications from "../utils/Especifications";

const useGenerateTable = (tableData, columns) => {
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const generateTable = () => (
    <table className="w-full">
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-2 border">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return generateTable;
};

const TableElectricalEsp = () => {
  const columns = [
    {
      header: "Data",
      accessorKey: "name",
    },
    {
      header: "Value",
      accessorKey: "value",
    },
  ];

  const electricalTable = useGenerateTable(data.electricalTable, columns);
  const mechanicalTable = useGenerateTable(data.machanicalTable, columns);
  const temperatureTable = useGenerateTable(data.temperatureTable, columns);
  const dischargeTable = useGenerateTable(data.dischargeTable, columns);
  const chargeTable = useGenerateTable(data.chargeTable, columns);
  const complianceTable = useGenerateTable(data.complianceTable, columns);


  const especifictions = [
    {especification: "Eléctricas", table: electricalTable},
    {especification: "Mécanicas", table: mechanicalTable},
    {especification: "Carga", table: chargeTable},
    {especification: "Descarga", table: dischargeTable},
    {especification: "Temperatura", table: temperatureTable},
    {especification: "Legales", table: complianceTable},
  ]

  return (
    <>
        <div className="flex flex-col gap-10">
            {
                especifictions.map((item, i) => (
                <div key={i} className="">
                    <Especifications 
                    text = {item.especification}
                    />
                    {item.table()}
                </div>
                ))
            }
      </div>

    </>
  );
};

export default TableElectricalEsp;
