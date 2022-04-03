import _Form from "./styled.js";

import Title from "./../Title/styled.js";

import React, { memo, useState } from "react";
import Input from "./Input/index.js";

const Form = ({
  dataInputs,
  title="Cadastramento",
  dataGroup = [
    
    
 {
      title: "Dados pessoais",
      dataInput: [
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        },
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
          required: false,
        },
         {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        },
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
          required: false,
        },
         {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        },
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
          required: false,
        },
         {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        },
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
          required: false,
        },
      ],
    },
    {
      title: "Dados pessoais",
      dataInput: [
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        },
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
          required: false,
        },
         {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        },
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
          required: false,
        },
         {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        },
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
          required: false,
        },
         {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        },
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
          required: false,
        },
      ],
    },
    {
      title: "Dados pessoais",
      dataInput: [
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        },
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
          required: false,
        },
         {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        },
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
          required: false,
        },
         {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        },
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
          required: false,
        },
         {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        },
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
          required: false,
        },
      ],
    },
  ],
}) => {
  return (
    <_Form>
      <legend id="form-title" className="legend">
        {title}
      </legend>
{
  dataGroup.map((group,number)=>{
    return(
      <fieldset>
        <legend id="group-title" className="legend">
          {group.title}
        </legend>
        {group.dataInput.map((item, index) => {
          return (
            <Input
              required={item.required}
              title={item.title}
              placeholder={item.placeholder}
            />
          );
        })}
      </fieldset>
    )
  })
}
     
    </_Form>
  );
};
export default memo(Form);
