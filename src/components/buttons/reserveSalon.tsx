import * as S from "./styles";

export default function Button(props: any) {
  return (
    <S.Button color="reserve-salon">
      <S.Link className="link" href={`/salonPerfil/${props.idSalon}`}>
        RESERVAR
      </S.Link>
    </S.Button>
  );
}
