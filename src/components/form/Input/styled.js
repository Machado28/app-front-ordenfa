import styled from "styled-components";

const InputBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  background: #000;;
  flex-direction: column;
  margin:4px;
   
`;
const Description=styled.span`
color:#1f1f1fc2 ;
font-size:11px;
font-weight:bold;
`;
const _Input = styled.input`

  outline: none;
  padding: 10px 10px;
  border-radius: 3px;
  width: 100%;
  height: 45px;
  border: 1px solid #ddd;
  margin-top: 6px;

  &:-webkit-placeholder{
    color: red !important;
  }
    
`;
export default _Input;

export { InputBox,Description };
