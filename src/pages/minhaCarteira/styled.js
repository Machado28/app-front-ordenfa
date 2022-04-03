import styled from "styled-components";
import Modal from "./../../components/Modal/styled.js";
import Form from "./../../components/form/index";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction:column;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-between;
  padding-top:10%;
`;

export default Container;

const _Modal = styled(Modal)`
 background-color:#000000b7 !important;
  transform:translateY(-287px);
  height:860px;
  z-index:6;
  position:fixed;
  width:120%;
  display:${props=>props.click===true?'none':'flex'};
  align-items:center;
  justify-content:center;
  overflow:scroll;
  flex-direction:column;
`;
const _ModalChildren = styled(Modal)`
 background-color:#fff !important;
  margin:1px;
  width:60%;
  border-radius:4px;
  height:400px;
  
`;


 
export { _Modal,_ModalChildren };
