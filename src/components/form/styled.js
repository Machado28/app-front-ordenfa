import styled from "styled-components";
import Title from "../Title/styled";

const Form_ = styled.form`
  width: 70%;
  height: 600px;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  margin: 1% 0 1% 0;
 

 
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
