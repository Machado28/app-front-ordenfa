import { FaMedapps, FaMixcloud, FaRegChartBar } from "react-icons/fa";
import * as S from "./styles.js";

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
              <S.SubTitle>SOLICITAÇÃO</S.SubTitle>
              <S.Description>
                Faça a solicitacao da  tua carteira em um click!
                  Faça a solicitacao da  tua carteira em um click!
              </S.Description>
            </S.ContainterElements>
          </S.Card>

          <S.Card>
            <S.ContainterElements>
              <S.Icon>
                <FaMixcloud />
              </S.Icon>
              <S.SubTitle>Solicitacao</S.SubTitle>
              <S.Description>
                Faça a solicitacao da  tua carteira em um click!
                  Faça a solicitacao da  tua carteira em um click!
              </S.Description>
            </S.ContainterElements>
          </S.Card>

          <S.Card>
            <S.ContainterElements>
              <S.Icon>
                <FaRegChartBar />
              </S.Icon>
              <S.SubTitle>Solicitacao</S.SubTitle>
              <S.Description>
                Faça a solicitacao da  tua carteira em um click!
                  Faça a solicitacao da  tua carteira em um click!
              </S.Description>
            </S.ContainterElements>
          </S.Card>
        </S.ContainerCard>
      </S.ContainerAllElements>
    </S.Container>
  );
}
