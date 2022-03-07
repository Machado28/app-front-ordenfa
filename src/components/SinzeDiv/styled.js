import styled from "styled-components";

const SinzeDiv_ = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  background-color: ${ (props)=>props.bColor ?'#fff':'#e0e2e0'};
  flex:1;
`;
export default SinzeDiv_;
