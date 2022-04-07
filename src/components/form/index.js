import _Form from "./styled.js";
import Title from "./../Title/styled.js";
import React, { memo, useState } from "react";
import Input from "./Input/index.js";
import Select from "./Select/index.js";
import Radio from "./radio/index.js";

const Form = ({
  onChange,
  onClick,
  onSubmit,
  title = "Cadastramento",
  dataGroup = [
    {
      title: "Dados pessoais",
      dataInput: [
        {
          title: "Nome Completo",
          placeholder: "digite o nome completo",
        },
      ],
    },
  ],
}) => {
   const renderChange= ()=>onChange()
  return (
    <_Form onSubmit={onSubmit}>
      <legend id="form-title" className="legend">
        {title}
      </legend>
      {dataGroup.map((group, number) => {
        return (
          <fieldset>
            <legend id="group-title" className="legend">
              {group.title}
            </legend>
            {group.dataInput.map((item, index) => {
              return (
                <>
                  {item.type === "radio" ? (
                    <Radio
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
                          title={item.title}
                          option={item.option}
                        ></Select>
                      ) : (
                        <Input
                          required={item.required}
                          title={item.title}
                          placeholder={item.placeholder}
                          type={item.type}
                          onChange={()=>onChange}
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
    </_Form>
  );
};
export default memo(Form);
