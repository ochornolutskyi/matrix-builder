import {
   INCREMENT_CELL,
   CREATE_MATRIX,
   REMOVE_ROW,
   ADD_ROW,
   SET_NEAREST_IDS,
   RESET_NEAREST_IDS,
   SET_SETTINGS,
   REBUILD_MATRIX,
   RESET_SETTINGS,
} from "./action_types";

export const setSettings = (settings) => {
   return {
      type: SET_SETTINGS,
      settings,
   };
};

export const resetSettings = () => {
   return { type: RESET_SETTINGS };
};

export const createMatrix = () => {
   return {
      type: CREATE_MATRIX,
   };
};

export const rebuildMatrix = () => {
   return { type: REBUILD_MATRIX };
};

export const incrementCell = (id, value) => {
   return {
      type: INCREMENT_CELL,
      id,
      value,
   };
};

export const removeRow = (rowCount) => {
   return {
      type: REMOVE_ROW,
      rowIndex: rowCount - 1,
   };
};

export const addRow = () => {
   return {
      type: ADD_ROW,
   };
};

export const setNearestIds = (id) => {
   return {
      type: SET_NEAREST_IDS,
      id,
   };
};

export const resetNearestIds = () => {
   return {
      type: RESET_NEAREST_IDS,
   };
};
