import React from "react";
import { useSelector } from "react-redux";
import HeadCell from "./HeadCell/index";

const headerCell = (key, value) => <HeadCell key={key} value={value} />;
const createHeads = (columnsCount) => {
   let heads = [headerCell("№", "№")];
   for (let i = 0; i < columnsCount; i++) {
      heads.push(headerCell(i + 1, i + 1));
   }
   heads.push(headerCell("Sum", "Sum"));
   return heads;
};

const TableHead = () => {
   const columnsCount = useSelector(
      (state) => state.matrix.settings.columnsCount
   );
   const heads = createHeads(columnsCount);
   return (
      <thead>
         <tr>{heads}</tr>
      </thead>
   );
};

export default TableHead;
