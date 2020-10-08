import {
   INCREMENT_CELL,
   REMOVE_ROW,
   ADD_ROW,
   SET_NEAREST_IDS,
   RESET_NEAREST_IDS,
   SET_SETTINGS,
   RESET_SETTINGS,
} from "../../action_types";
import {
   createMatrix,
   rebuildMatrix,
   addRows,
} from "./buildingMatrix";
import defaultState from "./defaultState";
import getIds from "./findNearestIds";

const initialState = defaultState;
const sortData = (data) => data.flat().sort((a, b) => a.value - b.value);

const checkMatrixData = (data, settings, newSettings) => {
   if (data.length === 0) {
      return createMatrix(newSettings.rowsCount, newSettings.columnsCount);
   } else if (
      settings.rowsCount !== newSettings.rowsCount ||
      settings.columnsCount !== newSettings.columnsCount
   ) {
      return rebuildMatrix(data, settings, newSettings);
   } else {
      return data;
   }
};

const matrixReducer = (state = initialState, action) => {
   let data, sortedData, settings;
   switch (action.type) {
      case SET_SETTINGS:
         data = checkMatrixData(
            [...state.data],
            state.settings,
            action.settings
         );
         return {
            ...state,
            data,
            sortedData: sortData(data),
            settings: action.settings,
         };
      case RESET_SETTINGS:
         return {
            defaultState,
         };
      case ADD_ROW:
         data = addRows([...state.data], 1, state.settings.columnsCount);
         settings = { ...state.settings, rowsCount: data.length };
         return {
            ...state,
            settings,
            data,
            sortedData: sortData(data),
         };
      case REMOVE_ROW:
         data = state.data.filter((row, index) => index !== action.rowIndex);
         settings = { ...state.settings, rowsCount: state.data.length };
         return {
            ...state,
            settings,
            data,
            sortedData: sortData(data),
         };
      case INCREMENT_CELL:
         data = [...state.data];
         data.find((row) =>
            row.find((item) => (item.id === action.id ? item.value++ : null))
         );
         sortedData = sortData(data);
         return {
            ...state,
            data,
            sortedData,
            nearestIds: getIds(
               sortedData,
               state.settings.cellsCount,
               action.id
            ),
         };
      case SET_NEAREST_IDS:
         if (state.settings.cellsCount) {
            return {
               ...state,
               nearestIds: getIds(
                  state.sortedData,
                  state.settings.cellsCount,
                  action.id
               ),
            };
         } else {
            return { ...state };
         }

      case RESET_NEAREST_IDS:
         if (!!state.nearestIds.ids.length) {
            return { ...state, nearestIds: { sameValueIds: [], ids: [] } };
         } else {
            return { ...state };
         }
      default:
         return defaultState;
   }
};

export default matrixReducer;
