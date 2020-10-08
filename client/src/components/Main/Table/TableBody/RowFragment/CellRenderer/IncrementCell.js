import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   incrementCell,
   resetNearestIds,
   setNearestIds,
} from "../../../../../../redux/actions";

const IncrementCell = ({ id, value }) => {
   const nearestIds = useSelector((state) => state.matrix.nearestIds);
   const dispatch = useDispatch();
   const isSameValue = !!nearestIds.sameValueIds.find(
      (sameValueId) => sameValueId === id
   );
   const isNearestValue = !!nearestIds.ids.find(
      (nearestId) => nearestId === id
   );
   const className = isSameValue
      ? "same-value"
      : isNearestValue
      ? "nearest-value"
      : null;
   return (
      <td className={className}>
         <div
            onMouseEnter={() => dispatch(setNearestIds(id))}
            onMouseLeave={() => dispatch(resetNearestIds())}
            onClick={() => dispatch(incrementCell(id, value))}
         >
            {value}
         </div>
      </td>
   );
};

export default IncrementCell;
