import React from "react";
import './CrossButton.scss'

const CrossButton = ({ buttonClickHandler }) => {
   return (
      <div className="button-remove" onClick={buttonClickHandler}>
         <span className="button-remove__element"></span>
         <span className="button-remove__element"></span>
      </div>
   );
};

export default CrossButton;
