import React from "react";
import "./Button.scss";

const Button = ({ className, buttonClickHandler, buttonText }) => {
   return (
      <button className={className} onClick={buttonClickHandler}>
         {buttonText}
      </button>
   );
};

export default Button;
