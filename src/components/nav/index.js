import _Nav, { List } from "./styled";
import { Link } from "react-router-dom";

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
              <Link className="link" id={item.title}   to={item.path}>
                {item.icon}okookok
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
