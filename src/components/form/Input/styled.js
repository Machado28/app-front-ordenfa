import styled from "styled-components";

const InputBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  
  flex-direction: column;
   
`;

const _Input = styled.input`
  outline: none;
  padding: 20px 20px;
  border-radius: 3px;
  width: 100%;
  height: 50px;
  border: 1px solid #ddd;
  flex-grow: 300px;
  display: flex;
  margin-top: 6px;
`;
export default _Input;

export { InputBox };
