import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRow } from "../../../redux/actions";
import "./Table.scss";
import Button from "../../Button";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import BacklightHint from "./BacklightHint";

const Table = () => {
   const dispatch = useDispatch();
   const cellsCount = useSelector((state) => !!state.matrix.settings.cellsCount);


   return (
      <div className="table-wrapper">
         <Button
            className="red-button"
            buttonText="Add new row"
            buttonClickHandler={() => dispatch(addRow())}
         />
         {cellsCount && <BacklightHint />}
         <table className="table-matrix">
            <TableHead />
            <TableBody />
         </table>
      </div>
   );
};

export default Table;
