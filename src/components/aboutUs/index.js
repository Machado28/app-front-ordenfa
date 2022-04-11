import * as S from "./styles.js";

export default function AboutUs() {
  return (
    <S.Container>
      <S.ContainerImage>
        <S.CardBrown />
        <S.Image />
        <S.BorderComponent />
      </S.ContainerImage>

      <S.ContainerDescription>
        <S.Title>SAIBA QUEM SOMOS!</S.Title>
        <S.Description>
        A Ordenfa é muito massa mesmo.
          <br />
          <br />
        </S.Description>
        <S.Description>
          A ordenfa é de mais
        </S.Description>
        <S.Assinatura>Ordenfa</S.Assinatura>
      </S.ContainerDescription>
    </S.Container>
  );
}
