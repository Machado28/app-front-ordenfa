import { ListItem } from "@material-ui/core";
import styled from "styled-components";

export const Menu= styled.div`
width: 300px;
border-left:1px solid #eee;
box-shadow:2px 12px 38px #1f1f1f55;
height:1000px;
position:fixed;
background:#fff;
`;
export const MenuChildrean=styled.div`
 width:100%;
 height:auto;
 background:#fff;

`

export const Main = styled.main`
width: 72%;
border:1px solid #ddd;
height:1000px;
background:#fff;
background:transparent;
margin:0 auto 0 25%;
`

export const Title = styled.h1`
color:#fff;
padding:20px;
background-color:green;
font-weight:bold;
font-size:26px;
border-bottom:2px solid #eee;
`


export const TitleMain =styled(Title)`
font-size:20px;
font-weight:none;
padding:10px;
margin-top:3.5%;
`


export const Table = styled.div`
 
font-weight:bold;
font-size:26px;
height:400px;
width:100%;
margin:1% auto 20% auto;
border:1px solid #ddd;
background-color:#fff;
overflow:auto;
`
export const Line = styled.div`
font-weight:bold;
font-size:26px;
height:100px;
display:flex;
aligin-items:center;
flex-direction:row;
justify-content:flex-start;
border-top:1px solid #eee;
margin-bottom:8px;
overflow:auto; 
background:${((props)=> props.key%2===0 ? '#ccc':"#fff")};
`


export const Ul= styled.ul`
height:50px;
display:flex;
aligin-items:center;
flex-direction:column;
justify-content:flex-start;
padding:16px 0;

 
`;

export const Li= styled.li`
  font-size:12px;
  color:green;
  background-color:#ff5;
  text-align:center
  margin:0;
  width:155px;
  padding:6px 0;
`;

export const LiContent= styled(Li)`
  font-size:10px;
  color:#1f1f1f;
  font-weight:0
  text-align:center
  
`;