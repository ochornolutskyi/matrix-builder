import React from "react";

const PercentageCell = ({ sumRow, value }) => {
   const percent = ((value * 100) / sumRow).toFixed(2);
   const style = {
      backgroundSize: `100% ${percent}% `,
   };
   return (
      <td>
         <div style={style} className="percentage-cell">
            {percent}%
         </div>
      </td>
   );
};

export default PercentageCell;
