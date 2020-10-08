import React from "react";
import './ErrorHint.scss'

const ErrorHint = ({ errorText }) => {
   return <div className='error-hint'>{errorText}</div>;
};

export default ErrorHint;
