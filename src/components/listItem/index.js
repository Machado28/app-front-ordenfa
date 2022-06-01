import { Link } from 'react-router-dom'
import * as S from './styled'

const ListItem = ({
    title , 
    icon ,
    path ,
    id ,
}) => {
    return (
        <S.Container>
           <Link to={path}><img src={icon}></img>{title}</Link>
        </S.Container>
    )
}
export default ListItem;