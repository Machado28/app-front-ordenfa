
import * as S from "../styled.js";
import ListItem from "src/components/listItem/index.js";
import MenuLateral from "src/components/MenuLateral/index.js";
import Tabela from "src/components/Tabela/index.js";
import MenuData, { UserList } from "../data.js";

const Perfil = () => {
    return (
        <>
            <S.Container>

                <MenuLateral userMenuData={MenuData} ></MenuLateral>
                < S.Main>
                
                <S.TitleMain  
                   >Perfil</S.TitleMain>

                   <div> 
                       dfgskmgkdkhmkldm
                    </div>
                </S.Main>
            </S.Container>
        </>
    );
};
export default Perfil;
