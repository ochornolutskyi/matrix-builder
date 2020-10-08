import React from "react";
import InputSettings from "./InputSettings";

const Input = ({ id, label, ...props }) => {
   return (
      <div className="input-wrapper">
         <label htmlFor={id}>{label}</label>
         <InputSettings id={id} {...props} />
      </div>
   );
};

export default Input;
