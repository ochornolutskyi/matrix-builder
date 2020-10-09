import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSettings } from "../../redux/actions";
import "./SettingsTable.scss";
import Button from "../Button";
import ErrorHint from "../ErrorHint";
import Input from "./Input";

const inputClassName = "input-settings";
const ROWS_COUNT_ERROR_MESSAGE = "Please, set the correct rows value";
const COLUMNS_COUNT_ERROR_MESSAGE = "Please, set the correct columns value";
const CELLS_COUNT_ERROR_MESSAGE = "Please, set the correct cells value";
const ROWS_COLUMNS_CELLS_COUNT_ERROR_MESSAGE =
   "Please, set the correct rows, columns and cells value";
const ROWS_COLUMNS_COUNT_ERROR_MESSAGE =
   "Please, set the correct rows and columns value";
const ROWS_CELLS_COUNT_ERROR_MESSAGE =
   "Please, set the correct rows and cells value";
const COLUMNS_CELLS_COUNT_ERROR_MESSAGE =
   "Please, set the correct columns and cells value";
const checkTargetCount = (targetCount) => targetCount === 0 || targetCount < 0;
const checkCellsCount = (cellsCount) => cellsCount < 0;
const checkSettings = (rowsCount, columnsCount, cellsCount) => {
   if (
      checkTargetCount(rowsCount) &&
      checkTargetCount(columnsCount) &&
      checkCellsCount(cellsCount)
   ) {
      return ROWS_COLUMNS_CELLS_COUNT_ERROR_MESSAGE;
   } else if (checkTargetCount(rowsCount) && checkTargetCount(columnsCount)) {
      return ROWS_COLUMNS_COUNT_ERROR_MESSAGE;
   } else if (checkTargetCount(rowsCount) && checkCellsCount(cellsCount)) {
      return ROWS_CELLS_COUNT_ERROR_MESSAGE;
   } else if (checkTargetCount(columnsCount) && checkCellsCount(cellsCount)) {
      return COLUMNS_CELLS_COUNT_ERROR_MESSAGE;
   } else if (checkTargetCount(rowsCount)) {
      return ROWS_COUNT_ERROR_MESSAGE;
   } else if (checkTargetCount(columnsCount)) {
      return COLUMNS_COUNT_ERROR_MESSAGE;
   } else if (checkCellsCount(cellsCount)) {
      return CELLS_COUNT_ERROR_MESSAGE;
   }
};

const SettingsTable = () => {
   const settings = useSelector((state) => state.matrix.settings);
   const dispatch = useDispatch();
   const [rowsCount, setRowsCount] = useState(settings.rowsCount);
   const [columnsCount, setColumnsCount] = useState(settings.columnsCount);
   const [cellsCount, setCellsCount] = useState(settings.cellsCount);
   const [error, setError] = useState(null);

   const showErrorMessage = (message) => {
      setError(message);
      setTimeout(() => {
         setError(null);
      }, 2500);
   };

   const applySettingsHandler = () => {
      const error = checkSettings(rowsCount, columnsCount, cellsCount);
      if (error) {
         showErrorMessage(error);
      } else {
         dispatch(setSettings({ rowsCount, columnsCount, cellsCount }));
      }
   };

   return (
      <div className="settings-wrapper">
         <Input
            id="rows-input"
            className={inputClassName}
            label="Set the rows count"
            value={rowsCount}
            onChangeInput={setRowsCount}
         />
         <Input
            id="columns-input"
            className={inputClassName}
            label="Set the columns count"
            value={columnsCount}
            onChangeInput={setColumnsCount}
         />
         <Input
            id="cells-input"
            className={inputClassName}
            label="Set the count of cells to show the nearest value"
            value={cellsCount}
            onChangeInput={setCellsCount}
         />
         <Button
            className="red-button"
            buttonText="Apply settings"
            buttonClickHandler={applySettingsHandler}
         />
         {error && <ErrorHint errorText={error} />}
      </div>
   );
};

export default SettingsTable;
