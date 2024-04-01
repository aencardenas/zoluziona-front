import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import data from "../data/especifications.json";
import { useState } from "react";

const useGenerateTable = (tableData, columns) => {
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const generateTable = () => (
    <>
      <table className="w-full">
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2 border text-sm lg:text-lg">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  return generateTable;
};

const TableElectricalEsp = () => {
  const columns = [
    {
      header: "",
      accessorKey: "name",
    },
    {
      header: "",
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
    { id: "electricas", especification: "Eléctricas", table: electricalTable },
    { id: "mecanicas", especification: "Mécanicas", table: mechanicalTable },
    { id: "carga", especification: "Carga", table: chargeTable },
    { id: "descarga", especification: "Descarga", table: dischargeTable },
    { id: "temperatura", especification: "Temperatura", table: temperatureTable },
    { id: "legales", especification: "Legales", table: complianceTable },
  ];

  const [openTables, setOpenTables] = useState(
    especifictions.reduce((acc, curr) => {
      acc[curr.id] = false;
      return acc;
    })
  );

  const toggleTable = (id) => {
    setOpenTables((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div className="flex flex-col gap-5 h-auto">
        {especifictions.map((item, i) => (
          <div key={i}>
            <div
              className="flex bg-green-28 text-white lg:hover:text-blue-70 p-[5px] items-center cursor-pointer"
              onClick={() => toggleTable(item.id)}
            >
              <svg
                className={`w-6 h-6 text-blue-70  transform transition-transform ${
                  openTables[item.id] ? "rotate-90" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="font-medium lg:text-lg">{item.especification}</p>
            </div>

            <div className={`${openTables[item.id] ? "" : "hidden"}`}>
              {item.table()}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TableElectricalEsp;
