import imgSlider1 from './assets/img/slide-1.jpg'
import imgSlider2 from './assets/img/slide-2.jpg'
import imgSlider3 from './assets/img/slide-4'
import imgSlider4 from './assets/img/slide-5.jpg'


export const Slider = [
  {
    title: "Solicitação De  Licença Profissional",
    text: ` Nunca Foi tão fácil obter a tua licença.
    Nunca Foi tão fácil obter a tua licença.
    Nunca Foi tão fácil obter a tua licença.
    Nunca Foi tão fácil obter a tua licença. `,
    button1: "saber mais...",
    button2:'Sobre',
     img:[
            {path:imgSlider3}
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
  }
];

export default dataGroup;



 
      
      
