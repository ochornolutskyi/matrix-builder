import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSettings } from "../../redux/actions";
import "./SettingsTable.scss";
import Button from "../Button";
import ErrorHint from "../ErrorHint";
import Input from "./Input";

const inputClassName = "input-settings";
const ROWS_COUNT_ERROR_MESSAGE = "Please, set the correct rows count";
const COLUMNS_COUNT_ERROR_MESSAGE = "Please, set the correct columns count";
const ROWS_AND_COLUMNS_COUNT_ERROR_MESSAGE =
   "Please, set the correct rows and columns count";
const checkSettings = (rowsCount, columnsCount) => {
   if (
      (rowsCount === 0 || rowsCount < 0) &&
      (columnsCount === 0 || columnsCount < 0)
   ) {
      return ROWS_AND_COLUMNS_COUNT_ERROR_MESSAGE;
   } else if (rowsCount === 0 || rowsCount < 0) {
      return ROWS_COUNT_ERROR_MESSAGE;
   } else if (columnsCount === 0 || columnsCount < 0) {
      return COLUMNS_COUNT_ERROR_MESSAGE;
   }
};

const SettingsTable = () => {
   const settings = useSelector((state) => state.matrix.settings);
   const dispatch = useDispatch();
   const [rowsCount, setRowsCount] = useState(settings.rowsCount);
   const [columnsCount, setColumnsCount] = useState(settings.columnsCount);
   const [cellsCount, setCellsCount] = useState(settings.cellsCount);
   const [isError, setIsError] = useState(false);
   const [errorText, setErrorText] = useState("");

   const showErrorMessage = (message) => {
      setIsError(true);
      setErrorText(message);
      setTimeout(() => {
         setIsError(false);
      }, 2000);
   };

   const applySettingsHandler = () => {
      const error = checkSettings(rowsCount, columnsCount);
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
         {isError && <ErrorHint errorText={errorText} />}
      </div>
   );
};

export default SettingsTable;
