import styled from "styled-components";
import Modal from "./../../components/Modal/styled.js";
import Form from "./../../components/form/index";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction:column;
  flex-wrap:wrap;
`;

export default Container;

const _Modal = styled(Modal)`
 background-color:#cdd3cd;
  margin-top:200px;
`;

 
export { _Modal };
