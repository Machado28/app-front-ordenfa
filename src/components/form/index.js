import _Form from "./styled.js";

import Title from "./../Title/styled.js";

import React, { memo, useState } from "react";
 
 

const Form = ({
  dataInputs,
  title,
  Inputs = [],
  limitRight = 4,
  limitLeft = 4,
}) => {
 
  return (
    <_Form >
      <Title>{title}</Title>
      <input></input>
    </_Form>
  );
};
export default memo(Form);
