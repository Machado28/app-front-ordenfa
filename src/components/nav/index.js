import _Nav, { List, _NavMobile } from "./styled";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = ({
  data = [
    {
      title: "nome",
    },
  ],
}) => {
  return (
    <_Nav>
      {data.map((item, index) => {
        return (
          <List>
            {item.icon !== undefined ? (
              <Link className="link" id={item.title} to={item.path}>
                
                {item.title}
              </Link>
            ) : (
              <Link to={item.path}>{item.title}</Link>
            )}
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
        Menu { click ? <FaBars onClick={HandleClick} id="fa-bars"></FaBars>:<FaTimes onClick={HandleClick} id="Times"></FaTimes>}
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
