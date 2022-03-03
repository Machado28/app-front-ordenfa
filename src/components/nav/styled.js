import styled from "styled-components";

const _Nav = styled.nav`
  width: 40%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default _Nav;

const List = styled.li`
  width: 30%;
  padding: 12px;
  height: 40px;
  background-color: green;
  color: #1f1f1f;
  margin: 12px;

  a,
  .link {
    color: green;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid green;
    }
  }
`;

export { List };
