import _Nav, { List, _NavMobile } from "./styled";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import SubNav from "./subNav";

const Nav = ({
  data = [
    {
      title: "nome",
    },
  ],
}) => {
  const [click,setClick]= useState(false)
const HandleClick=()=>{
 return  setClick(!click)
}
  
  return (
    <_Nav>
      {data.map((item, index) => {
        return (
          <List key={index-'o'}>
            {
              <>
                {item.option!==undefined ? (
                  <Link key={item.title}onClick={HandleClick}  className="link" id={item.title} to={item.path}>
                    {item.title}
                  </Link>
                ) : (
                  <Link  key={index}  to={item.path}>{item.title}</Link>
                )}
              </>
            }
           {
             item.option ? <SubNav key={index*index+3} click={click} option={item.option}>
               
            </SubNav  >:<></>
           } 
          </List>
        );
      })}
    </_Nav>
  );
};
export default Nav;

export const NavMobile = ({
  data = [
    {
      title: "nome",
    },
  ],
}) => {
  const [click, setClick] = useState(false);

  const HandleClick = () => {
    setClick(!click);
  };

  console.log(click);
  return (
    <_NavMobile click={click}>
      <div id="menu-icon">
        Menu{" "}
        {click ? (
          <FaBars onClick={HandleClick} id="fa-bars"></FaBars>
        ) : (
          <FaTimes onClick={HandleClick} id="Times"></FaTimes>
        )}
      </div>
      {data.map((item, index) => {
        return (
          <>
            <List>
              {item.icon !== undefined ? (
                <>
                  {" "}
                  {item.icon}
                  <Link className="link" id={item.title} to={item.path}>
                    {item.title}
                  </Link>
                </>
              ) : (
                <Link to={item.path}>{item.title}</Link>
              )}
            </List>
          </>
        );
      })}
    </_NavMobile>
  );
};
