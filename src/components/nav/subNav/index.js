import Container from "./styled";
import React ,{ Link } from 'react-router-dom';

const SubNav = ({option,click}) => {
  return option[0].title!=="" ?<Container click={click}option={option} >
      {option.map((item,index, )=>{
       
          return(
            <li key={index}><Link to={item.path}>{item.title}</Link></li>
          )
      })}
  </Container>:<></> 
 
};
export default SubNav;
