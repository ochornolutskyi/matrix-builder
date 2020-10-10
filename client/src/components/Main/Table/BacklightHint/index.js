import React from "react";

const BacklightHint = () => {
   return (
      <div className="table-blacklight-hint">
         <div>
            <div className="same-value"></div> the same values
         </div>
         <div>
            <div className="nearest-value"></div> the nearest values
         </div>
         <div>
            <div className="max-value"></div> the max allowable values
         </div>
      </div>
   );
};

export default BacklightHint;
