import styled from "styled-components";

const InputBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  
  flex-direction: column;
   
`;
const Description=styled.span`
color:#8f8f5f !important;
font-size:13px;
font-weight:bold;
`;
const _Input = styled.input`
  outline: none;
  padding: 20px 20px;
  border-radius: 3px;
  width: 80%;
  height: 40px;
  border: 1px solid #ddd;
  flex-grow: 300px;
  display: flex;
  margin-top: 6px;

  &:-webkit-placeholder{
    color: red !important;
  }
`;
export default _Input;

export { InputBox,Description };
