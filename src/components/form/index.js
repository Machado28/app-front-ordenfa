import _Form, { GroupInput } from "./styled.js";
import Input_ from "./Input/styled";
import Title from "./../Title/styled.js";
import dataInputs from "../../pages/inscricao/data.js";
import React, { memo, useState } from "react";
import SinzeDiv from "./../SinzeDiv/index";
import { Title_ } from "./styled";
import ContainerGroupInputBox from "./ContainerGroupInputBox/index";
import GroupInputBox from "./GroupInputBox/index";
import { Description } from "./Input/styled.js";
import Main from "./../Main/index";
import Input from "./Input/index.js";
import InputBox from "./InputBox/index";
import Select from "./Select/index.js";
import Button_ from "./Button/styled.js";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import express from "./assets/img/express.png";

const Form = ({
  inputList = dataInputs,
  title,
  Inputs = [],
  limitRight = 4,
  limitLeft = 4,
}) => {
  const sizeInputList = inputList.length;

  const [nextForm, setNextForm] = useState(0);
  const [totalEmolumento, setTotalEmolumento] = useState(0);
  const [logoExpress, setlogoExpress] = useState(0);

  const HandleEmolumento = (event) => {
    const preco = event.target.value;
    const checked = event.target.checked;
    checked === true
      ? setTotalEmolumento(totalEmolumento + Number(preco))
      : setTotalEmolumento(totalEmolumento - Number(preco));

    console.log("value=>", checked);
    console.log("props=>", event.target.value);
  };
  const HandleNextFOrm = (event) => {
    nextForm >= sizeInputList - 1
      ? setNextForm(nextForm)
      : setNextForm(nextForm + 1);

    console.log("Size=>", sizeInputList);
  };
  const HandlePrevForm = (event) => {
    nextForm <= 0 ? setNextForm(nextForm) : setNextForm(nextForm - 1);

    console.log("Size=>", sizeInputList);
  };
  console.log("Next=>", nextForm);
  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <_Form onSubmit={HandleSubmit}>
      <Title>{title}</Title>
      <SinzeDiv></SinzeDiv>
      <Main>
        
        <Title_>
          
          {totalEmolumento !== 0
            ? inputList[nextForm][0] + " :" + Number(totalEmolumento) + "kzs"
            : inputList[nextForm][0] + " :"}
            {inputList[nextForm][0][0]?.express===true ?(<>ola mundo</>):''}
        </Title_>
        <ContainerGroupInputBox>
          <GroupInputBox id="group-input-box">
            {inputList[nextForm][1]
              .filter((item, index) => index < limitLeft)
              .map((input, key) => {
                return (
                  <>
                    {input.type === "select" ? (
                      <InputBox>
                        <Description>{input.name}</Description>
                        <Select data={input}></Select>
                      </InputBox>
                    ) : (
                      <>
                        {input.type === "checkbox" ? (
                          <InputBox id={input.id} key={key}>
                            <Description key={key}>
                              {input.name} {"preço: " + input.preco + " kzs"}
                            </Description>
                            <Input
                              id={input.id}
                              key={key}
                              type={input.type}
                              placeholder={input.placeHolder}
                              preco={input.preco}
                              onClick={HandleEmolumento}
                            />
                            {""}
                          </InputBox>
                        ) : (
                          <>
                            <InputBox id={input.id} key={key}>
                              <Description key={key}>{input.name}</Description>
                              <Input
                                id={input.id}
                                key={key}
                                type={input.type}
                                placeholder={input.placeHolder}
                                preco={input.preco}
                              />{" "}
                            </InputBox>
                          </>
                        )}
                      </>
                    )}
                  </>
                );
              })}
          </GroupInputBox>
          <GroupInputBox id="group-input-box">
            {inputList[nextForm][1]
              .filter((item, index) => index >= limitLeft)
              .map((input, key) => {
                return (
                  <>
                    {input.type === "select" ? (
                      <InputBox>
                        <Description>{input.name}</Description>
                        <Select data={input}></Select>
                      </InputBox>
                    ) : (
                      <>
                        {input.type === "checkbox" ? (
                          <InputBox id={input.id} key={key}>
                            <Description key={key}>
                              {input.name} {"preço: " + input.preco + " kzs"}
                            </Description>
                            <Input
                              id={input.id}
                              key={key}
                              type={input.type}
                              placeholder={input.placeHolder}
                              preco={input.preco}
                              onClick={HandleEmolumento}
                            />
                            {""}
                          </InputBox>
                        ) : (
                          <>
                            <InputBox id={input.id} key={key}>
                              <Description key={key}>{input.name}</Description>
                              <Input
                                id={input.id}
                                key={key}
                                type={input.type}
                                placeholder={input.placeHolder}
                                preco={input.preco}
                              />{" "}
                            </InputBox>
                          </>
                        )}
                      </>
                    )}
                  </>
                );
              })}
          </GroupInputBox>
        </ContainerGroupInputBox>
      </Main>
      <SinzeDiv bColor="#fff">
        <Button_
          click={nextForm}
          value={"voltar"}
          type="submit"
          onClick={HandlePrevForm}
        >
          <FaAngleLeft></FaAngleLeft>Voltar
        </Button_>

        <Button_
          click={nextForm}
          type="submit"
          onClick={HandleNextFOrm}
          value={"seguinte"}
        >
          {" "}
          {nextForm + 1 === sizeInputList ? "Finalizar" : "Seguinte"}
          <FaAngleRight></FaAngleRight>
        </Button_>
      </SinzeDiv>
      <SinzeDiv></SinzeDiv>
    </_Form>
  );
};
export default memo(Form);
