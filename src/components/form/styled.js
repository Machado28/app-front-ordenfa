import styled from "styled-components";
import Input from "./Input/index";

const Form = styled.form`
  width: 100%;
  height: 400px;
  display: flex;
  background-color: #fff;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin: 3% 0 3% 0 ;
`;
export default Form;

const GroupInput = styled.div`
  width: 47%;
  height: 300px;
  display: flex;
  padding-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Title = styled.h5`
  width: 100%;
  height: 40px;
  background-color: green;
  color: #fff;
  display: flex;
  align-items: center;

  padding-left: 20px;
`;

export { Title, GroupInput };
