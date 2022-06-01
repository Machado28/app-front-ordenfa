import styled from "styled-components";

const Container = styled.h1`
  font-size:${((item)=>item.size!==undefined ?item.size:'57px')};
  margin-bottom:30px;
  color:${(({color})=>color!==undefined ?color:'#fff')};
 

`;
export default Container;
