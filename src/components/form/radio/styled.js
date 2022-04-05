import styled from "styled-components";
import Label from "./../Input/styled";

const Radio_ = styled.input`
  width: 10px;
  height: 10px;

  && {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    background-color: red;
  }
  
`;
export default Radio_;

const Label_ = styled(Label)`
  border: none;
  margin-top: 6px;
  transition: 0.3s ease;
  font-size: 10px;

  border-radius: 3px;
  width: 20%;
  height: 75px;

  #label-1 {
    width: 100%;
    border-top: 1px solid #ddd;
    margin: -38px 0 0 0;
    padding: 0;
    height: 55px;
  }

  #label-2 {
    border: 0;
    height: 0;
    width: 50%;
    padding:0  12px ;
  }
  h6.h6 {
   font-size:14px;
  }
`;
export { Label_ };
