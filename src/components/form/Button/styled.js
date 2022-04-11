import styled from "styled-components";

const Button_ = styled.button`
  background-color: ${(props) => (props.color ? props.color : "green")};
  color: ${(props) => (props.color ? "#fff" : "#fff")};
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 13px;
  
  border: 1px solid #fff;
  width: 14%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: ${(props) =>
    props.click === 0 && props.value === "voltar" ? "#ddd" : "green"};
  margin: 0 14px 4px;
  &:active {
    border: 1px solid #1e5945;
  }
  &#firstbutton{

  }
`;
export default Button_;
