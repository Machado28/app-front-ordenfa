import styled from "styled-components";
import Title from "../Title/styled";

const Form_ = styled.form`
  width: 70%;
  height: 500px;
  display: flex;
  background-color: #fff;
  box-shadow:-6px 18px 12px #1f1f1f49;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  border-radius:6px;
  border:1px solid #ccc;

 
`;
export default Form_;

const Title_ = styled(Title)`
  background-color: #fff;
  font-size: 12px;
  font-weight: 600;
  color: #0d630d;
  padding: 12px;
  border-bottom: 1px solid #eee;
`;
export { Title_ };
