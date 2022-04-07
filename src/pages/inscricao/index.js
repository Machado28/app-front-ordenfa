import Container from "./styled";
import { Slider } from "./data";
import Barner from "../../components/barner";
import Form from "../../components/form";
import Footer from "../../components/footer";
import { FormContainer } from "../styled";
import { useState } from "react";

const Inscricao = () => {
  const [nomeCompleto, setNomeCompleto] = useState([]);
  const [bi, setBi] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [nomeDoPai, setNomeDopai] = useState("");
  const [nomeDaMae, setNomeDaMae] = useState("");
  const [naturalidade, setNaturalidade] = useState("");
  const [nComuna, setnComuna] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [nProvincia, setnProvincia] = useState("");
  const [nMunicipio, setnMunicipio] = useState("");
  const [sexo, setSexo] = useState("masculino");
  const [nBairro, setnBairro] = useState("");
  const [documento, setDocumento] = useState("");
  const [dataEmissaoBi, setDataEmissaoBi] = useState("");
  const [dataExpiracaoBi, setDataExpiracaoBi] = useState("");
  const [biPassadoPor, setBiPassadoPor] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [residenciaRua, setResidenciaRua] = useState("");
  const [residenciaPredio, setResidenciaPredio] = useState("");
  const [residenciaCasa, setResidenciaCasa] = useState("");
  const [residenciaBairro, setResidenciaBairro] = useState("");
  const [residenciaComuna, setResidenciaComuna] = useState("");
  const [residenciaMunicipio, setResidenciaMunicipio] = useState("");
  const [residenciaProvincia, setResidenciaProvincia] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [escolaICiclo, setEscolaICiclo] = useState("");

  const [residenciaBairroEscolaICiclo, setResidenciaBairroEscolaICiclo] =
    useState([{ title: "Estalagem" }]);
  const [residenciaMunicipioEscolaICiclo, setResidenciaMunicipioEscolaICiclo] =
    useState([{ title: "Estalagem" }]);
  const [residenciaProvinciaEscolaICiclo, setResidenciaProvinciaEscolaICiclo] =
    useState([{ title: "Estalagem" }]);
  const [residenciaPaisEscolaICiclo, setResidenciaPaisEscolaICiclo] = useState([
    { title: "Estalagem" },
  ]);
  const [anoEscolaICiclo, setAnoEscolaICiclo] = useState("");
  const [curso, setCurso] = useState([
    { title: "Enfermagem" },
    { title: "Análises Clínica" },
  ]);

  const [escolaMedio, setEscolaMedio] = useState("");
  const [residenciaBairroEscolaMedio, setResidenciaBairroEscolaMedio] =
    useState("");
  const [residenciaMunicipioEscolaMedio, setResidenciaMunicipioEscolaMedio] =
    useState("");
  const [residenciaProvinciaEscolaMedio, setResidenciaProvinciaEscolaMedio] =
    useState("");
  const [residenciaPaisEscolaMedio, setResidenciaPaisEscolaMedio] =
    useState("");
  const [anoEscolaMedio, setAnoEscolaMedio] = useState("");

  const HandleOnChange = (e) => {
    console.log(e.target.value);

    let nomeDaInput = e.target.name;

    if (nomeDaInput === "nome") setNomeCompleto(e.target.value);

    if (nomeDaInput === "dataNascimento") setDataNascimento(e.target.value);

    if (nomeDaInput === "pai") setNomeDopai(e.target.value);

    if (nomeDaInput === "mae") setNomeDaMae(e.target.value);

    if (nomeDaInput === "naturalidade") setNaturalidade(e.target.value);

    if (nomeDaInput === "nComuna") setnComuna(e.target.value);

    if (nomeDaInput === "nacionalidade") setNacionalidade(e.target.value);

    if (nomeDaInput === "nProvincia") setnProvincia(e.target.value);
    if (nomeDaInput === "documento") setDocumento(e.target.value);

    if (nomeDaInput === "nMunicipio") setnMunicipio(e.target.value);

    if (nomeDaInput === "sexo") setSexo(e.target.value);

    if (nomeDaInput === "nBairro") setnBairro(e.target.value);

    if (nomeDaInput === "dataEmissaoBi") setDataEmissaoBi(e.target.value);

    if (nomeDaInput === "dataExpiracaoBi") setDataExpiracaoBi(e.target.value);

    if (nomeDaInput === "biPassadoPor") setBiPassadoPor(e.target.value);

    if (nomeDaInput === "estadoCivil") setEstadoCivil(e.target.value);

    if (nomeDaInput === "residenciaRua") setResidenciaRua(e.target.value);

    if (nomeDaInput === "residenciaPredio") setResidenciaPredio(e.target.value);

    if (nomeDaInput === "residenciaCasa") setResidenciaCasa(e.target.value);

    if (nomeDaInput === "residenciaBairro") setResidenciaBairro(e.target.value);

    if (nomeDaInput === "residenciaComuna") setResidenciaComuna(e.target.value);

    if (nomeDaInput === "residenciaMunicipio")
      setResidenciaMunicipio(e.target.value);

    if (nomeDaInput === "curso") setCurso(e.target.value);

    if (nomeDaInput === "residenciaProvincia")
      setResidenciaProvincia(e.target.value);

    if (nomeDaInput === "telefone") setTelefone(e.target.value);

    if (nomeDaInput === "email") setEmail(e.target.value);

    if (nomeDaInput === "escolaICiclo") setEscolaICiclo(e.target.value);

    if (nomeDaInput === "residenciaBairroEscolaICiclo")
      setResidenciaBairroEscolaICiclo(e.target.value);

    if (nomeDaInput === "residenciaMunicipioEscolaICiclo")
      setResidenciaMunicipioEscolaICiclo(e.target.value);

    if (nomeDaInput === "residenciaProvinciaEscolaICiclo")
      setResidenciaProvinciaEscolaICiclo(e.target.value);

    if (nomeDaInput === "residenciaPaisEscolaICiclo")
      setResidenciaPaisEscolaICiclo(e.target.value);

    if (nomeDaInput === "anoEscolaICiclo") setAnoEscolaICiclo(e.target.value);

    if (nomeDaInput === "escolaMedio") setEscolaMedio(e.target.value);

    if (nomeDaInput === "residenciaBairroEscolaMedio")
      setResidenciaBairroEscolaMedio(e.target.value);

    if (nomeDaInput === "residenciaMunicipioEscolaMedio")
      setResidenciaMunicipioEscolaMedio(e.target.value);

    if (nomeDaInput === "residenciaProvinciaEscolaMedio")
      setResidenciaProvinciaEscolaMedio(e.target.value);

    if (nomeDaInput === "residenciaPaisEscolaMedio")
      setResidenciaPaisEscolaMedio(e.target.value);
    if (nomeDaInput === "anoEscolaMedio") setAnoEscolaMedio(e.target.value);
  };

  const dataGroup = [
    {
      title: "Dados pessoais",
      dataInput: [
        {
          title: "Nome Completo ",
          name: "nome",
          value: nomeCompleto,
          placeholder: "digite o nome completo",
        },
        {
          title: "Nome do pai",
          name: "pai",
          value: nomeDoPai,
          placeholder: "digite o nome completo do teu pai",
        },
        {
          title: "  ",
          name: "mae",
          value: nomeDaMae,
          placeholder: "digite o nome completo",
        },
        {
          title: "data de Nascimento ",
          name: "dataNascimento",
          value: dataNascimento,
          type: "date",
        },
        {
          title: "Natural de :",
          name: "naturalidade",
          value: naturalidade,
          placeholder: "digite a tua naturalidade",
        },
        {
          title: "Bairro :",
          name: "nBairro",
          value: nBairro,
          type: "text",
        },
        {
          title: "Comuna/Distrito urbano de :",
          name: "nComuna",
          value: nComuna,
          placeholder: "digite Comuna/Distrito onde nasceu",
        },
        {
          title: "Município de :",
          name: "nMunicipio",
          value: nMunicipio,
          placeholder: "digite o municipio onde nasceu",
        },
        {
          title: "Provincia de :",
          name: "nProvincia",
          value: nProvincia,
          placeholder: "digite a  província onde nasceu",
        },
        {
          title: "Sexo :",
          name: "sexo",
          value: sexo,
          type: "radio",
          option: [{ title: "masculino" }, { title: "femenino" }],
        },
        {
          title: "nacionalidade :",
          name: "naciolidade",
          value: nacionalidade,
          placeholder: "digite a tua naciolidade",
        },

        {
          title: "Documento de Identificação :",
          name: "documento",
          value: documento,
          type: "select",
          option: [{ title: "Bilhete de identidade" }, { title: "Passaporte" }],
        },

        {
          title: "Número do documento de Identificação :",
          name: "bi",
          value: bi,
          type: "text",
          placeholder: "Digite o  número do documento escolhido",
        },
        {
          title: "Passado por:",
          name: "bipassadoPor",
          value: biPassadoPor,
          type: "text",
          placeholder: "Digite o nome da identificação onde tratou ",
        },
        {
          title: "Data de emissão:",
          name: "dataEmissaoBi",
          value: dataEmissaoBi,
          type: "date",
        },
        {
          title: "Data de expitação:",
          name: "dataExpiracaoBi",
          value: dataExpiracaoBi,
          type: "date",
        },
        {
          title: "Estado Civil:",
          name: "estadoCivil",
          value: estadoCivil,
          type: "select",
          option: [
            { title: "Estado Civil" },
            { title: "casado(a)" },
            { title: "Divorciado(a)" },
          ],
        },
      ],
    },
    {
      title: "Residência actual",
      dataInput: [
        {
          title: "Rua:",
          name: "residenciaRua",
          value: residenciaRua,
          type: "text",
          placeholder: "Moras em que Rua? ",
        },
        {
          title: "Predio/Bloco:",
          name: "residenciaPredio",
          value: residenciaPredio,
          type: "text",
          placeholder: "Moras em que Predio/Bloco? ",
        },
        {
          title: "Casa/Apartamento nº :",
          name: "residenciaCasa",
          value: residenciaCasa,
          type: "text",
          placeholder: "Qual é o número da tua casa/Apartamento ? ",
        },
        {
          title: "Bairro:",
          name: "residenciaBairro",
          value: residenciaBairro,
          type: "text",
          placeholder: "Moras em que Bairro ? ",
        },
        {
          title: "Comuna/Distrito Urbano:",
          name: "residenciaComuna",
          value: residenciaComuna,
          type: "text",
          placeholder: "Moras em que Comuna/Distrito Urbano? ",
        },
        {
          title: "Municipio:",
          name: "residenciaMunicipio",
          value: residenciaMunicipio,
          type: "text",
          placeholder: "Moras em que Municipio? ",
        },
        {
          title: "Provincia:",
          name: "residenciaProvincia",
          value: residenciaProvincia,
          type: "text",
          placeholder: "Moras em que Provincia? ",
        },
      ],
    },
    {
      title: "Contactos:",
      dataInput: [
        {
          title: "Email:",
          name: "email",
          value: email,
          type: "email",
          placeholder: "Digite o teu endereço de email? ",
        },
        {
          title: "Telefone 1 :",
          name: "telefone",
          value: telefone,
          type: "tel",
          placeholder: "Digite o teu numero de telefone? ",
        },
      ],
    },
    {
      title: "Formação Acadêmica:",
      dataInput: [
        {
          title: "Curso/are de formação :",
          name: "curso",
          value: telefone,
          type: "select",
          option: curso,
        },
        {
          title: "Nome da escola onde fez o primeiro Cíclo:",
          name: "escolaICiclo",
          value: escolaICiclo,
          placeholder: "Escola onde fez o primeiro Cíclo ",
        },

        {
          title: "Municipio:",
          name: "residenciaMunicipioEscolaICiclo",
          value: residenciaMunicipioEscolaICiclo,
          type: "select",
          option: residenciaMunicipioEscolaICiclo,
        },
        {
          title: "Bairro:",
          name: "residenciaBairroEscolaICiclo",
          value: residenciaBairroEscolaICiclo,

          placeholder: "Municipio",
          type: "select",
          option: residenciaBairroEscolaICiclo,
        },
        {
          title: "Provincia:",
          name: "residenciaProvinciaEscolaICiclo",
          value: residenciaProvinciaEscolaICiclo,
          type: "select",
          option: residenciaProvinciaEscolaICiclo,
        },
        {
          title: "Pais:",
          name: "residenciaPaisEscolaICiclo",
          value: residenciaPaisEscolaICiclo,
          type: "text",
        },
        {
          title: "Ano:",
          name: "anoEscolaICiclo",
          value: anoEscolaICiclo,
          type: "number",
        },
        {
          title: "Nome da escola onde fez o Curso:",
          name: "escolaICiclo",
          value: escolaICiclo,
          placeholder: "Escola onde fez o Curso de Saúde: ",
        },

        {
          title: "Municipio:",
          name: "residenciaMunicipioEscolaICiclo",
          value: residenciaMunicipioEscolaICiclo,
          type: "select",
          option: residenciaMunicipioEscolaICiclo,
        },
        {
          title: "Bairro:",
          name: "residenciaBairroEscolaICiclo",
          value: residenciaBairroEscolaICiclo,

          placeholder: "Municipio",
          type: "select",
          option: residenciaBairroEscolaICiclo,
        },
        {
          title: "Provincia:",
          name: "residenciaProvinciaEscolaICiclo",
          value: residenciaProvinciaEscolaICiclo,
          type: "select",
          option: residenciaProvinciaEscolaICiclo,
        },
        {
          title: "Pais:",
          name: "residenciaPaisEscolaICiclo",
          value: residenciaPaisEscolaICiclo,
          type: "text",
        },
        {
          title: "Ano:",
          name: "anoEscolaICiclo",
          value: anoEscolaICiclo,
          type: "number",
        },
      ],
    },
  ];
  return (
    <Container>
      <Barner Slider={Slider}></Barner>
      <FormContainer>
        <Form onChange={HandleOnChange} dataGroup={dataGroup}></Form>
      </FormContainer>
      <Footer></Footer>
    </Container>
  );
};
export default Inscricao;
