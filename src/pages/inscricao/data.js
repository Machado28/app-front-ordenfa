const dataInputs = [
  [
    "Dados pessoais",
    [
      {
        type: "text",
        name: "Nome Completo",
        placeHolder: "Digite o nome completo",
      },
      {
        type: "text",
        name: "Nome Completo do Pai",
        placeHolder: "Digite o nome completo do pai",
      },
      {
        type: "text",
        name: "Nome Completo da Mãe",
        placeHolder: "Digite o nome completo da mãe",
      },
      {
        type: "date",
        name: "Data de Dascimento",
      },
      {
        type: "number",
        name: "Idade",
        placeHolder: "Ex.: 18",
      },
      {
        type: "select",
        name: "Sexo",
        options: ["Maculino", "Femenino"],
      },
      {
        type: "select",
        name: "Document de Identificação",
        options: ["Bilhete de identidade", "Passaporte"],
      },
      {
        type: "text",
        name: "Nº do Documento de Identificação",
        placeHolder: "Ex.:00H4653LAO98",
      },
    ],
  ],

  [
    "Local de Nascimento",
    [
      {
        type: "text",
        name: "Naturalidade",
        placeHolder: "em que município você nasceu ?",
      },
      {
        type: "text",
        name: "Distrito Urbano/ Rua",
        placeHolder: "Em que distrito urbano ou rua  você nasceu ?",
      },
      {
        type: "text",
        name: "Provícia",
        placeHolder: "Em que província você nasceu ?",
      },
      {
        type: "text",
        name: "País",
        placeHolder: "Em que país você nasceu ?",
      },
    ],
  ],
  [
    "Dados De Ensino Do Primeiro Ciclo",
    [
      {
        type: "text",
        name: "Escola onde fez o I ciclo",
        placeHolder: "Digite o nome da escola",
      },

      {
        type: "text",
        name: "Ano",
        placeHolder: "Digite o nome o no",
      },
      {
        type: "text",
        name: "Bairro/distrito Urbano",
        placeHolder: "Digite o bairro/distrito Urbano",
      },
      {
        type: "text",
        name: "Município",
        placeHolder: "Digite o municipio",
      },
      {
        type: "text",
        name: "Provincia",
        placeHolder: "Digite a provincia",
      },
      {
        type: "text",
        name: "País",
        placeHolder: "Digite o pais",
      },
    ],
  ],

  [
    "Dados De Ensino Do Ensino Médio",
    [
      {
        type: "text",
        name: "Escola onde fez o curso de  Enfermagem",
        placeHolder: "Digite o nome da escola",
      },

      {
        type: "text",
        name: "Ano",
        placeHolder: "Digite o nome o no",
      },
      {
        type: "text",
        name: "Bairro/distrito Urbano",
        placeHolder: "Digite o bairro/distrito Urbano",
      },
      {
        type: "text",
        name: "Município",
        placeHolder: "Digite o municipio",
      },
      {
        type: "text",
        name: "Provincia",
        placeHolder: "Digite a provincia",
      },
      {
        type: "text",
        name: "País",
        placeHolder: "Digite o pais",
      },
    ],
  ],
];

export default dataInputs;

// {
//         type:'number',
//         name:'Idade',

//     },

//      {
//         type:'text',
//         name:'Número do Documento de Indentificação',
//         placeHolder:'Ex.: 0080H67L6799LA0'
//     },
//     {
//         type:'date',
//         name:'Data de emissão do Documento',

//     },
//     {
//         type:'date',
//         name:'Data de validade do Documento',

//     },
//     {
//         type:'text',
//         name:'Local da Emissão do Documento',

//     },
