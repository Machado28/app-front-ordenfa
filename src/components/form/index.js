import _Form, { ButtonArea } from "./styled.js";
import Title from "./../Title/styled.js";
import React, { memo, useState } from "react";
import Input from "./Input/index.js";
import Select from "./Select/index.js";
import Radio from "./radio/index.js";
import Button from "./Button/index.js";

const Form = ({
  onChange=()=>{},
  onClick=()=>{},
  onSubmit=()=>{},
  title = "Cadastramento",
  dataGroup = [
    {
      title: "Dados pessoais",
      dataInput: [
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        
          option:[{ title: "Estalagem" }]
        },
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
         type:'select',
          option:[{ title: "Estalagem" }]
        },
      ],
    },
  ],
}) => {
  const renderChange = () => onChange();
  return (
    <_Form onSubmit={onSubmit}>
      
      <legend id="form-title" className="legend">
        {title}
      </legend>
      {dataGroup.map((group, number) => {
        return (
          <fieldset  key={number*6}>
            
              <legend  key={number+1} id="group-title" className="legend">
                {group.title}
              </legend>
            
            {group.dataInput.map((item, index) => {
              return (
                <>
                  {item.type === "radio" ? (
                    <Radio
                    key={index+1}
                      required={item.required}
                      title={item.title}
                      value={item.title}
                      onClick
                      onChange
                      option={item.option}
                    ></Radio>
                  ) : (
                    <>
                      {item.type === "select" ? (
                        <Select
                        key={index+1}
                          title={item.title}
                          option={item.option}
                        ></Select>
                      ) : (
                        <Input
                         key={index+3}
                          required={item.required}
                          title={item.title}
                          placeholder={item.placeholder}
                          type={item.type}
                          onChange={() => onChange}
                          name={item.name}
                          value={item.value}
                        />
                      )}
                    </>
                  )}
                </>
              );
            })}
          </fieldset>
        );
      })}
      <ButtonArea>
        <Button text={"Inscrever-se"}></Button>
      </ButtonArea>
    </_Form>
  );
};
export default Form;
