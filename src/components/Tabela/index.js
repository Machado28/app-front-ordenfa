import * as S from './styled'
import { Link } from 'react-router-dom'

const Tabela = ({ data} ) => {

    return (
        <S.Main >
            <S.TitleMain>{window.location.pathname.replace('/', '')}</S.TitleMain>

            <S.Table>
                {data.map((item, keyM) => {
                    return (
                        <S.Line key={keyM}>
                            {item.map((item, key) => {
                                return (
                                    <S.Ul key={key + item.title}>{item.path !== undefined || item.title === 'id'
                                        ? <Link to={item?.path + item.content}><S.Li key={key + item.content}>{item.title}</S.Li></Link> :
                                        <S.Li key={key + item.content}>{item.title}</S.Li>
                                      
                                    }

                                        <S.LiContent key={item.title}>{ key==0 ?keyM+1:item.content}</S.LiContent>
                                    </S.Ul>
                                )
                            })}
                        </S.Line>
                    )
                })}

            </S.Table>
        </S.Main>
    )

}
export default Tabela