import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-items: center;
  background: #1f1f1fc5;
  position:fixed;
  z-index:9;
`;

export default Container;

const Modal = styled.div`
margin-top:60px ;
  width: 55%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background: #fff;
  
  
`;

export  {Modal};