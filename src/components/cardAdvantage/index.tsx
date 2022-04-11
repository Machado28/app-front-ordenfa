import { FaMedapps, FaMixcloud, FaRegChartBar } from "react-icons/fa";
import * as S from "./styles";

export default function CardAdvantage() {
  return (
    <S.Container>
      <S.ContainerAllElements>
        <S.Title>TEMOS OS MELHORES BENEFÍCIOS PARA VOCÊ</S.Title>

        <S.ContainerCard>
          <S.Card>
            <S.ContainterElements>
              <S.Icon>
                <FaMedapps />
              </S.Icon>
              <S.SubTitle>AGENDAMENTO</S.SubTitle>
              <S.Description>
                Faça o agendamento dos melhores serviços de beleza sem sair de
                casa, procure o estabelecimento mais próximo de si.
              </S.Description>
            </S.ContainterElements>
          </S.Card>

          <S.Card>
            <S.ContainterElements>
              <S.Icon>
                <FaMixcloud />
              </S.Icon>
              <S.SubTitle>AGENDAMENTO</S.SubTitle>
              <S.Description>
                Faça o agendamento dos melhores serviços de beleza sem sair de
                casa, procure o estabelecimento mais próximo de si.
              </S.Description>
            </S.ContainterElements>
          </S.Card>

          <S.Card>
            <S.ContainterElements>
              <S.Icon>
                <FaRegChartBar />
              </S.Icon>
              <S.SubTitle>AGENDAMENTO</S.SubTitle>
              <S.Description>
                Faça o agendamento dos melhores serviços de beleza sem sair de
                casa, procure o estabelecimento mais próximo de si.
              </S.Description>
            </S.ContainterElements>
          </S.Card>
        </S.ContainerCard>
      </S.ContainerAllElements>
    </S.Container>
  );
}
