import React from "react";
import StaticCell from "../RowFragment/CellRenderer/StaticCell";
import RowFragment from "../RowFragment";
import calculateAverageValues from "./calculateAverageValues";

const className = "average-cell";

const AverageRow = ({ matrixData }) => {
   const averageColumnsValues = calculateAverageValues(matrixData);
   const sumRow = averageColumnsValues
      .reduce((sum, value) => sum + Number(value), 0)
      .toFixed(2);
   return (
      <tr>
         <RowFragment
            className={className}
            label="Avg"
            rowData={averageColumnsValues}
            sumRow={sumRow}
            RendererType={StaticCell}
         />
      </tr>
   );
};

export default AverageRow;
