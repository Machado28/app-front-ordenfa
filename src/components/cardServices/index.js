import {
  FaChartLine,
  FaProductHunt,
  FaRegListAlt,
  FaShoppingBag,
} from "react-icons/fa";
import * as S from "./styles";

const services = [
  {
    icon: <FaRegListAlt />,
    description: "CARATEIRA PROFISSIONAL",
    legend: "SOLICITE JÁ",
  },
  {
    icon: <FaChartLine />,
    description: "LICENÇA DE ESTÁGIOS",
     legend: "SOLICITE JÁ",
  },

];

export default function Services() {
  return (
    <S.Container>
      {services.map((item, index) => (
        <S.Services key={index}>
          <S.Icons>{item.icon}</S.Icons>
          <S.Description>{item.description}</S.Description>
          <S.Precos>{item.legend}</S.Precos>
        </S.Services>
      ))}
    </S.Container>
  );
}
