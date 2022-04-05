import styled from "styled-components";

const Container = styled.nav`
  width: 23%;
  height: auto;
  border-radius: 2px;
  background:#1f1f1f;
  display:${(item)=>item.click===false  ?'1':'none'};
  position: absolute;
  margin: 210px 0 0 0;
  box-shadow: 3px 6px 9px #1f1f1fc1;
  

  border:2px solid green;
 
  li {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid green;
    
    a {
      font-size: 18px;
      width: 100%;
       height: 50px;
       text-align: center;
       display:flex;
       align-content:center;
       align-items: center;
       justify-content: center;
       color:#fff;
       justify-items:center ;
    }
    a:hover{
        background: green;
        color:#fff;
    }
  }
`;
export default Container;
