import React from "react";
import { useDispatch } from "react-redux";
import { removeRow } from "../../../../../redux/actions";
import CrossButton from "../../../../CrossButton";
import IncrementCell from "../RowFragment/CellRenderer/IncrementCell";
import RowFragment from "../RowFragment";

const TableRow = ({ rowNumber, rowData }) => {
   const dispatch = useDispatch();
   const sumRow = rowData
      .map((data) => data.value)
      .reduce((sum, value) => sum + value, 0);

   return (
      <tr>
         <RowFragment
            label={rowNumber}
            rowData={rowData}
            RendererType={IncrementCell}
            sumRow={sumRow}
         />
         <td>
            <CrossButton
               buttonClickHandler={() => dispatch(removeRow(rowNumber))}
            />
         </td>
      </tr>
   );
};

export default TableRow;
