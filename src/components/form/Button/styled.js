import styled from "styled-components";

const Button_ = styled.button`
  background-color: ${(props) => (props.color ? props.color : "green")};
  color: ${(props) => (props.color ? '#fff': "#fff")};
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: bold;
  border: 1px solid #fff;
  width:14%;
  height:40px;
margin:0  14px 4px ; 
  &:active {
    border: 1px solid #1e5945;
  }
`;
export default Button_;
