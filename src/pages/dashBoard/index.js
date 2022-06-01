
import * as S from "./styled.js";
import ListItem from "src/components/listItem/index.js";
import MenuLateral from "src/components/MenuLateral/index.js"; 

const DashBoard = ({ userMenuData = [{
  title: 'Home',
  icon: 'none',
  path: '/perfil'
},
{
  title: 'Inscritos',
  icon: 'none',
  path: '/usuarios'
},
{
  title: '',
  icon: 'none',
  path: '/perfil'
}] }) => {
  return (
    <>
      <S.Container>

      <MenuLateral></MenuLateral>
            </S.Container>
    </>
  );
};
export default DashBoard;
