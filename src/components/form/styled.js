import styled from "styled-components";
import Title from "../Title/styled";

const Form_ = styled.form`
  width: 70%;
  height: 300px;
  display: flex;
  background-color: #000;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
 
 

 
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
