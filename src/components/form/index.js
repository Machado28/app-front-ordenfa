import _Form, { GroupInput } from "./styled.js";
import Input from "./Input/index";
import dataInputs from "../../pages/inscricao/data.js";
import React,{ flegment,useState } from "react";

const Form = ({ Inputs = dataInputs}) => {
  const { value, setValue } = useState([]);

const handleOnSubmit=()=>{}
  const HandleInputChange= (e)=>  {
   var data= e.target.value;
   setValue(data)
     console.log (value)
  };
  
  return (
    <_Form>
      <GroupInput>
        {Inputs.map((input, index) => {
          return (
            <>
              <Input
                description={input.name}
                key={index}
                value={input}
                handleOnSubmit={handleOnSubmit}
                handleInputChange={HandleInputChange}
                placeholder={input.placeHolder}
                type={input.type}
              />
            </>
          );
        })}
      </GroupInput>
      <GroupInput>
        {Inputs.map((input, index) => {
          return (
            <>
              <Input
                description={input.name}
                key={index}
                placeholder={input.placeHolder}
                type={input.type}
              />
            </>
          );
        })}
      </GroupInput>
    </_Form>
  );
};
export default Form;
