const calculateAverageValues = (matrixData) => {
   const matrixValuesOnly = matrixData.map((item) =>
      item.map((row) => row.value)
   );
   const columnsNumber = matrixValuesOnly[0].length;
   let averageValues = [];
   for (let columnIndex = 0; columnIndex < columnsNumber; columnIndex++) {
      let columnSum = 0;
      for (let rowIndex = 0; rowIndex < matrixValuesOnly.length; rowIndex++) {
         columnSum += matrixValuesOnly[rowIndex][columnIndex];
      }
      const average = columnSum / matrixValuesOnly.length;
      averageValues.push(average);
   }
   return averageValues.map(avgValue=>avgValue.toFixed(2));
};
export default calculateAverageValues;
