import React from "react";

const StaticCell = ({ value }) => {
   return (
      <td className="static-cell">
         <div>{value}</div>
      </td>
   );
};

export default StaticCell;
