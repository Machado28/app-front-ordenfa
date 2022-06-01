
import * as S from "../styled.js";
import ListItem from "src/components/listItem/index.js";
import MenuLateral from "src/components/MenuLateral/index.js";
import Tabela from "src/components/Tabela/index.js";
import MenuData, { UserList } from "../data.js";

const Users = () => {
    return (
        <>
            <S.Container>

                <MenuLateral userMenuData={MenuData} ></MenuLateral>
                <Tabela data={UserList}></Tabela>
            </S.Container>
        </>
    );
};
export default Users;
