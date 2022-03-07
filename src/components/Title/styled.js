import styled from "styled-components";

const Title = styled.h5`
  width: 100%;
  height: 40px;
  background-color: green;
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size:${(props)=>props.size === undefined ??'14' }
`;
export default Title;
