import React from "react";
import "./InputCounts.scss";
import Button from "../../../Button";

const InputSettings = ({ id, value, onChangeInput }) => {
   return (
      <div className="input-settings">
         <Button
            className="input-control__button"
            buttonText="-"
            buttonClickHandler={()=>onChangeInput(--value)}
         />
         <input
            className="input-settings__input"
            type="number"
            id={id}
            onChange={(event) => onChangeInput(+event.target.value)}
            min="0"
            value={value}
         />
         <Button
            className="input-control__button"
            buttonText="+"
            buttonClickHandler={()=>onChangeInput(++value)}
         />
      </div>
   );
};

export default InputSettings;
