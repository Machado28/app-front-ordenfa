import imgSlider1 from './assets/img/slide-1.jpg'
import imgSlider2 from './assets/img/slide-2.jpg'
import imgSlider3 from './assets/img/slide-4'
import imgSlider4 from './assets/img/slide-5.jpg'


export const Slider = [
  {
    title: "Solicitação De  Carteira Profissional Para técnico",
    text: " Satisfazer as necessidades dos nossos profissionais, é a nossa responsabilidade. Odenfa somos uma família.Seja ordenfa",
    button1: "saber mais...",
    button2:'Sobre',
     img:[
            {path:imgSlider1}
            ,
            {path:imgSlider2},
            {path:imgSlider3},
            {path:imgSlider4}
        ]
  },
];const Ano = (start=1888,end=2022)=>{
  let option=[]
  for(let init=start; init<=end;init++)
  return [
          { title:init},
          
        ]
}
const dataGroup = [
   
  {
    title: "Dados Pessoais",
    dataInput: [
      {
        required: true,
        title: "Código de inscrição/BI/Passaporte",
        placeholder: "Qual é o teu código de inscrição/BI/Passaporte",
      },
      {
        required: true,
        title: "upload: BI",
        placeholder: "Qual é o teu código de inscrição/BI/Passaporte",
        type:'file'
      },
      {
        type: "text",
        required: true,
        title: "Nome Completo ",
        placeholder: "Digite o teu nome completo",
      },
      {
        type: "text",
        required: true,
        title: "Nome Completo do Pai",
        placeholder: "Digite o nome completo do pai",
      },
      {
        type: "text",
        required: true,
        title: "Nome Completo da Mãe",
        placeholder: "Digite o nome completo da mãe",
      },
      {
        type: "date",
        title: "Data de Dascimento",
      },
      {
        type: "number",
        title: "Idade",
        placeholder: "Ex.: 18",
      },
     
      {
        type: "select",
        title: "Nacionalidade",
        option: [
          { title: "Angolana" },
          { title: "Brasileira" },
          { title: "Portuguesa" },
        ],
      },
      //  {
      //   type: "radio",
      //   title: "Sexo",
      //   option: [{ title: "Maculino" }, { title: "Femenino" }],
      // },
      {
        type: "select",
        title: "Estado cívil",
        option: [
          { title: "Solteiro(a)" },
          { title: "Casado(a)" },
          { title: "Viúvo(a)" },
          { title: "Divorciado(a)" },
        ],
      },
      {
        type: "text",
        required: true,
        title: "Naturalidade",
        placeholder: "em que município você nasceu ?",
      },
      {
        type: "text",
        required: true,
        title: "Comuna /Distrito Urbano",
        placeholder: "Em que distrito urbano ou rua  você nasceu ?",
      },
      {
        type: "text",
        required: true,
        title: "Município ",
        placeholder: "Em que município você nasceu ?",
      },
      {
        type: "text",
        required: true,
        title: "Provícia/Estado",
        placeholder: "Em que província você nasceu ?",
      },
      {
        type: "text",
        required: true,
        title: "País",
        placeholder: "Em que país você nasceu ?",
      },
      {
        type: "file",
        required: true,
        title: "Foto tipo passe (obs: fundo branco)",
         
      },
      {
        type: "number",
        required: true,
        title: "Código de Comprovativo de quotas",
         placeholder: "Qual é o código do comprovativo de quotas",
     
      },
      ]
  },
  {
    title: "Dados De Formação",
    dataInput: [
      {
        type: "select",
       title: "Área de Formação/Curso",
        option: [
          { title: "Técnico de Enfermagem" },
          { title: "Técnico de Análises Clínica" },
          { title: "Técnico de Nutricionista" },
        ],
      },
       
      {
        required: true,
        title: "Certificado autencicado  (formato : pdf,png)",
        placeholder: "Qual é o teu código de inscrição/BI/Passaporte",
        type:"file"
      },
      
      {
        type: "date",
        required: true,
        title: "Ano de Início",
         
      },
      {
        type: "date",
        required: true,
        title: "data de Fim",
         
      },
      {
        type: "text",
        required: true,
        title: "Comuna /Distrito Urbano",
        placeholder: "Em que distrito urbano ou rua se encontra a escola ?",
      },
      {
        type: "text",
        required: true,
        title: "Município ",
        placeholder: "Em que município você nasceu ?",
      },
      {
        type: "text",
        required: true,
        title: "Provícia/Estado",
        placeholder: "Em que província você nasceu ?",
      },
      {
        type: "text",
        required: true,
        title: "País",
        placeholder: "Em que país você nasceu ?",
      },
             ]
  }
];

export default dataGroup;



 
      
      
//    
//   {
//     title: "Dados Pessoais",
//     dataInput: [
      

//   {
//     title: "Dados Pessoais",
//     datainput: [
//       {
//         type: "select",
//         title: "Document de Identificação",
//         option: [{ title: "Bilhete de identidade" }, { title: "Passaporte" }],
//       },
//       {
//         type: "text",
//         required: true,
//         title: "Nº do Documento de Identificação",
//         placeholder: "Ex.:00H4653LAO98",
//       },
//       {
//         type: "text",
//         required: true,
//         title: "Local de  emissão",
//         placeholder: "Onde tratou este documento?",
//       },
//       {
//         type: "date",
//         required: true,
//         title: "Data de  emissão",
//       },
//       {
//         type: "date",
//         required: true,
//         title: "Data de Validade",
//       },
//     ],
//   },
//   {
//     title: "Residência Actual",
//     dataInput: [
//       {
//         type: "text",
//         title: "Rua",
//         required: true,
//         placeholder: "Em qual rua estás a morar ?",
//       },
//       {
//         type: "text",
//         title: "Prédio/Bloco",
//         required: true,
//         placeholder: "Em que prédio/bloco estás a morar ?",
//       },
//       {
//         type: "text",
//         title: "Casa/Ato. nº",
//         required: true,
//         placeholder: "Qual é o número da tua casa/Ato ?",
//       },
//       {
//         type: "text",
//         title: "Comuna/Distrito",
//         required: true,
//         placeholder: "Em qual comuna/distrito estás a morar ?",
//       },
//       {
//         type: "text",
//         title: "Município",
//         required: true,
//         placeholder: "Em qual município estás a morar ?",
//       },
//       {
//         type: "text",
//         title: "Província",
//         required: true,
//         placeholder: "Em qual província estás a morar?",
//       },
//       {
//         type: "number",
//         title: "Telefone (1)",
//         required: true,
//       },

//       {
//         type: "email",
//         title: "Email",
//         required: true,
//       },
//     ],
//   },

//   {
//     title: "Dados De Ensino",
//     dataInpiut: [
//       {
//         type: "text",
//         required: true,
//         title: "Escola onde fez o I ciclo",
//         placeholder: "Digite o nome da escola",
//       },

//       {
//         type: "text",
//         required: true,
//         title: "Ano",
//         placeholder: "Digite o no",
//       },
//       {
//         type: "text",
//         required: true,
//         title: "Bairro",
//         placeholder: " Em que bairro frequentou o I Ciclo?",
//       },
//       {
//         type: "text",
//         required: true,
//         title: "Município",
//         placeholder: "Em que municipio frequentou o I Ciclo?",
//       },
//       {
//         type: "text",
//         required: true,
//         title: "Provincia",
//         placeholder: "Em que província frequentou o I Ciclo?",
//       },
//       {
//         type: "text",
//         required: true,
//         title: "País",
//         placeholder: "Em que país frequentou o I Ciclo?",
//       },
//     ],
//   },
//   {
//     title: "Dados De Ensino",
//     dataInput: [
//       {
//         type: "text",
//         required: true,
//         title: "Escola onde fez o curso de  Enfermagem",
//         placeholder: "Qual o nome da escola onde fez o ensino médio ?",
//       },

//       {
//         type: "text",
//         required: true,
//         title: "Ano",
//         placeholder: "Em que ano frequentou o ensino médio?",
//       },
//       {
//         type: "text",
//         required: true,
//         title: "Bairro/distrito Urbano",
//         placeholder: "Em que bairro frequentou o ensino médio?",
//       },
//       {
//         type: "text",
//         required: true,
//         title: "Município",
//         placeholder: "Em que município frequentou o ensino médio?",
//       },
//       {
//         type: "text",
//         required: true,
//         title: "Provincia",
//         placeholder: "Em que província frequentou o ensino médio?",
//       },
//       {
//         type: "text",
//         required: true,
//         title: "País",
//         placeholder: "Em que país frequentou o ensino médio?",
//       },
//       {
//         type: "select",
//         required: true,
//         title: "Nível acadêmico actual",
//         option: [
//           { title: "Técnico Médio" },
//           { title: "Técnico Profissional" },
//           { title: "Licenciado" },
//           { title: "Mestrado" },
//         ],
//       },
//     ],
//   },