const checkTargetValueIsLowest = (sortedData, targetId) =>
   sortedData[0].id === targetId;
const checkTargetValueIsBiggest = (sortedData, targetId) =>
   sortedData[sortedData.length - 1].id === targetId;
const getNearestIdsOfLowestValue = (sortedData, cellsCount) => {
   return sortedData.slice(1, cellsCount + 1).map((item) => item.id);
};
const getNearestIdsOfBiggestValue = (sortedData, cellsCount) => {
   return sortedData.slice(-cellsCount - 1, -1).map((item) => item.id);
};
const getNearestId = (sortedData, targetId) => {
   const indexOfTargetId = sortedData.indexOf(
      sortedData.find((item) => item.id === targetId)
   );
   const prevItem = sortedData[indexOfTargetId - 1];
   const nextItem = sortedData[indexOfTargetId + 1];
   const currentItem = sortedData[indexOfTargetId];
   const prevDiff = Math.abs(currentItem.value - prevItem.value);
   const nextDiff = Math.abs(nextItem.value - currentItem.value);
   const nearestItem = prevDiff < nextDiff ? prevItem : nextItem;
   return nearestItem.id;
};
const findNearestIds = (
   sortedData,
   targetId,
   cellsCount,
   ids = [],
   step = 0
) => {
   if (step < cellsCount) {
      if (checkTargetValueIsLowest(sortedData, targetId)) {
         ids.push(getNearestIdsOfLowestValue(sortedData, cellsCount - step));
         return ids.flat();
      } else if (checkTargetValueIsBiggest(sortedData, targetId)) {
         ids.push(getNearestIdsOfBiggestValue(sortedData, cellsCount - step));
         return ids.flat();
      } else {
         const id = getNearestId(sortedData, targetId);
         ids.push(id);
         sortedData = sortedData.filter((item) => item.id !== id);
         step++;
         return findNearestIds(sortedData, targetId, cellsCount, ids, step);
      }
   }
   return ids;
};
const getIds = (sortedData, cellsCount, targetId) => {
   const targetValue = sortedData.find((item) => item.id === targetId).value;
   const sameValueIds = sortedData
      .filter((item) => item.value === targetValue && item.id !== targetId)
      .map((item) => item.id);
   if (sameValueIds.length > 0) {
      sortedData = sortedData.filter((item) => !sameValueIds.includes(item.id));
   }
   const nearestIds = findNearestIds(sortedData, targetId, cellsCount);
   return { sameValueIds, ids: nearestIds };
};

export default getIds;
