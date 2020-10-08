import React from "react";
import { useSelector } from "react-redux";
import AverageRow from "./AverageRow";
import TableRow from "./TableRow";

const TableBody = () => {
   const data = useSelector((state) => state.matrix.data);
   const tableRows = data.map((row, index) => (
      <TableRow rowData={row} rowNumber={index + 1} key={index} />
   ));

   return (
      <tbody>
         {tableRows}
         <AverageRow matrixData={data} />
      </tbody>
   );
};

export default TableBody;
