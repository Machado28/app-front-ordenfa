const dataGroup = [
  {
    title: "Dados Pessoais",
    dataInput: [
      {
        required: true,
        title: "Código de Incrição",
        placeholder: "Qual é o teu código de inscrição",
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