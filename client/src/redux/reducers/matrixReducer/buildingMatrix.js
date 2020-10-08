const addCells = (columnsCount, row = [], step = 0) => {
   while (step < columnsCount) {
      row.push({
         id: `${Date.now()}${Math.round(1 + Math.random() * 9999)}${step}`,
         value: Math.round(100 + Math.random() * 899),
      });
      step++;
   }
   return row;
};
export const addRows = (data, rowsCount, columnsCount, step = 0) => {
   while (step < rowsCount) {
      const rowCells = addCells(columnsCount);
      data.push(rowCells);
      step++;
   }
   return data;
};
export const createMatrix = (rowsCount, columnsCount, data = []) => {
   return addRows(data, rowsCount, columnsCount);
};
const rebuildColumns = (data, prevSettings, newSettings) => {
   let columnsCountDiff = 0;
   if (prevSettings.columnsCount < newSettings.columnsCount) {
      columnsCountDiff = newSettings.columnsCount - prevSettings.columnsCount;
      data.forEach((row, index) => addCells(columnsCountDiff, row));
   } else if (prevSettings.columnsCount > newSettings.columnsCount) {
      columnsCountDiff = prevSettings.columnsCount - newSettings.columnsCount;
      data.forEach((row) => row.splice(-columnsCountDiff));
   }
   return data;
};
const rebuildRows = (data, prevSettings, newSettings) => {
   let rowsCountDiff = 0;
   if (prevSettings.rowsCount < newSettings.rowsCount) {
      rowsCountDiff = newSettings.rowsCount - prevSettings.rowsCount;
      addRows(data, rowsCountDiff, newSettings.columnsCount);
   } else if (prevSettings.rowsCount > newSettings.rowsCount) {
      rowsCountDiff = prevSettings.rowsCount - newSettings.rowsCount;
      data.splice(-rowsCountDiff);
   }
   return data;
};
export const rebuildMatrix = (data, prevSettings, newSettings) => {
   rebuildColumns(data, prevSettings, newSettings);
   rebuildRows(data, prevSettings, newSettings);
   return data;
};
