import Container, { Modal } from "./styled";

const ModalDesconto = ({
  anoUser,
  diaUser,
  mesUser,
  naturalidade,
  codAgente,
  provincia,
  curso,
  municipio,
  anoBi,
  mesBi,
  diaBi,
  username,
  mothername,
  fathername,
  binumber,
  conteudo = `Declaro que, por exercer a profissão de enfermagem, sou, nos termos do artigo 103º dos 
Estatuto da Ordem dos Enfermeiros de Angola, aprovado pelo Decreto Presidencial nº 
179/10 de 18 de Agosto, devedor(a) da Ordem dos Enfermeiros de Angola, com sede em 
Luanda, da quantia mensal de 1% do salário base em Akz, devendo a minha entidade 
empregadora Clínica/Hospital/Centro, reter o referido valor na fonte (meu salário) em 
conformidade com o Artigo 2º. Do Decreto executivo conjunto nº 72/91 de 15 Novembro e
depositá-lo mensalmente na conta bancária da Ordem dos Enfermeiros de Angola sedeada no 
Banco BIC, com o nº 112910572/10, IBAN AO06.0051.0000.1291.0572.1016.5`,
}) => {
  const data = new Date().toLocaleDateString();
  return (
    <Container>
      <Modal>
        <p>
          Eu <strong>{username}</strong>filho(a) de{" "}
          <strong>{mothername}</strong>e de <strong>{fathername}</strong>,
          Portador do B.I nº <strong>{binumber}</strong>, passado pelo Arquivo
          Nacional de Identificação Civil, Registo e Notariado aos{" "}
          <strong>{diaBi}</strong> de <strong>{mesBi}</strong> de{" "}
          <strong>{anoBi}</strong>, Natural de
          <strong>{naturalidade}</strong>, Município de,
          <strong>{municipio}</strong> Província de <strong>{provincia}</strong>
          , Nascido aos <strong>{diaUser}</strong> de <strong>{mesUser}</strong>{" "}
          <strong> {anoUser}</strong>, com o nº de Agente
          <strong>{codAgente}</strong>com a Categoria Profissional de{" "}
          <strong>{curso}</strong>
        </p>
        <p>{conteudo}</p>
        <span>{data}</span>
      </Modal>
    </Container>
  );
};
export default ModalDesconto;
