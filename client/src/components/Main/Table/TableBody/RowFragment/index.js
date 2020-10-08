import React, { useState } from "react";
import PercentageCell from "./CellRenderer/PercentageCell";
import StaticCell from "./CellRenderer/StaticCell";
import SumCell from "./CellRenderer/SumCell";

const RowFragment = ({ label, RendererType, rowData, sumRow }) => {
   const [showPercentageValue, setShowPercentageValue] = useState(false);
   const Renderer = showPercentageValue ? PercentageCell : RendererType;
   const rowCells = rowData.map((cellData, index) => {
      const value = cellData.value || cellData;
      return (
         <Renderer
            key={cellData.id || index}
            id={cellData.id}
            value={value}
            sumRow={sumRow}
         />
      );
   });

   return (
      <React.Fragment>
         <StaticCell key={label} value={label} />
         {rowCells}
         <SumCell
            key={sumRow}
            value={sumRow}
            sumMouseEnterHandler={() => setShowPercentageValue(true)}
            sumMouseLeaveHandler={() => setShowPercentageValue(false)}
         />
      </React.Fragment>
   );
};

export default RowFragment;
