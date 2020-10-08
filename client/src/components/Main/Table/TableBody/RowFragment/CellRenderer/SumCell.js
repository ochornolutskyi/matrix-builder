import React from "react";

const SumCell = ({ value, sumMouseEnterHandler, sumMouseLeaveHandler }) => {
   return (
      <td
         className="sum-cell"
         onMouseEnter={sumMouseEnterHandler}
         onMouseLeave={sumMouseLeaveHandler}
      >
         <div>{value}</div>
      </td>
   );
};

export default SumCell;
