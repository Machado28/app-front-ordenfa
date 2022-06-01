import ListItem from '../listItem';
import * as S from './styled'

const MenuLateral = ( {userMenuData} ) => {
  return (<S.Menu> <S.MenuChildrean  >
    <S.Title> DashBoard</S.Title>
    {userMenuData.map((item, key) => <>
      <ListItem title={item.title} icon={item.icon} path={item.path}></ListItem>
    </>)}
  </S.MenuChildrean></S.Menu>
  )
}
export default MenuLateral;
 