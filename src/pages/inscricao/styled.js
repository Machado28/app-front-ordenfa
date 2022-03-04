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
`;

export default Container;

const _Modal = styled(Modal)`
 background-color:#ccd3cd !important;
  margin:100px;
  height:600px;
`;

 
export { _Modal };
