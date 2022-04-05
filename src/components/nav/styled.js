import styled from "styled-components";

const _Nav = styled.nav`
  width: 48%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  @media screen and (max-width: 877px) {
    display: none;
  }
`;
const _NavMobile = styled.nav`
  display: none;
  & {
    transition: 1s ease-in-out;
    transform: translateX(
      ${(props) => (props.click === true ? "-250px" : "none")}
    );
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 1000px;
  background-color: #fff;
  margin-top: 80px;
  position: fixed;
  border: ${(props) => (props.click === true ? "none" : "1px solid #ddd")};
  border-top: none;
  box-shadow: ${(props) =>
    props.click === true ? "none" : "1px 9px 22px #ccc"};

  div#menu-icon {
    height: 50px;
    width: 100%;
    background-color: green;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    color: #fff;
    #fa-bars {
      font-size: 18px;
    }
  }

  li {
    justify-content: flex-start;
    &:hover {
      background-color: ${(props) =>
        props.click === true ? "none !important" : "green !important"};
      color: #fff !important;
    }
    &:hover a {
      background-color: ${(props) =>
        props.click === true ? "none !important" : "green !important"};
      color: #fff !important;
      border: 1px solid transparent;
    }
    width: 100%;
    padding-left: 14px;
    margin: 1px;
 
    background-color: #fff !important ;
    display: flex;
    flex-direction: row;
    align-items: center;
    a {
      color: #1f1f1f !important;
      padding-left: 14px;

      justify-content: space-around;
    }
  }
`;
export default _Nav;

const List = styled.li`

  height: 40px;
  background-color: green;
  color: #1f1f1f;
  margin: 12px;

  a,
  .link {
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    width:120px;
    border-bottom: 2px solid transparent;
    &:hover {
     background-color:green;
     padding:2px;
     border-radius:2px;
     color:#fff;
    }
  }
`;

export { List, _NavMobile };
