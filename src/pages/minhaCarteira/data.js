const dataInputs = [
  [
    "Preenche cuidadosamente o formúlario",
    [
      {
        type: "text",
        required: true,
        name: "Código de Incrição",
        placeHolder: "Qual é o teu código de inscrição",
      },
      {
        type: "text",
        required: true,
        name: "Nome Completo do Pai",
        placeHolder: "Digite o nome completo do pai",
      },
      {
        type: "text",
        required: true,
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
        name: "Nacionalidade",
        options: ["Angolana", "Brasileira", "Portuguesa"],
      },
      {
        type: "select",
        name: "Estado cívil",
        options: ["Solteiro(a)", "Casado(a)", "Viúvo(a)", "Divorciado(a)"],
      },
    ],
  ],
  [
    "Dados Pessoais",
    [
      {
        type: "text",
        required: true,
        name: "Naturalidade",
        placeHolder: "em que município você nasceu ?",
      },
      {
        type: "text",
        required: true,
        name: "Comuna /Distrito Urbano",
        placeHolder: "Em que distrito urbano ou rua  você nasceu ?",
      },
      {
        type: "text",
        required: true,
        name: "Município ",
        placeHolder: "Em que município você nasceu ?",
      },
      {
        type: "text",
        required: true,
        name: "Provícia/Estado",
        placeHolder: "Em que província você nasceu ?",
      },
      {
        type: "text",
        required: true,
        name: "País",
        placeHolder: "Em que país você nasceu ?",
      },
    ],
  ],
  [
    "Dados Pessoais",
    [
      {
        type: "select",
        name: "Document de Identificação",
        options: ["Bilhete de identidade", "Passaporte"],
      },
      {
        type: "text",
        required: true,
        name: "Nº do Documento de Identificação",
        placeHolder: "Ex.:00H4653LAO98",
      },
      {
        type: "text",
        required: true,
        name: "Local de  emissão",
        placeHolder: "Onde tratou este documento?",
      },
      {
        type: "date",
        required: true,
        name: "Data de  emissão",
      },
      {
        type: "date",
        required: true,
        name: "Data de Validade",
      },
    ],
  ],
  [
    "Residência Actual",
    [
      {
        type: "text",
        name: "Rua",
        required: true,
        placeHolder: "Em qual rua estás a morar ?",
      },
      {
        type: "text",
        name: "Prédio/Bloco",
        required: true,
        placeHolder: "Em que prédio/bloco estás a morar ?",
      },
      {
        type: "text",
        name: "Casa/Ato. nº",
        required: true,
        placeHolder: "Qual é o número da tua casa/Ato ?",
      },
      {
        type: "text",
        name: "Comuna/Distrito",
        required: true,
        placeHolder: "Em qual comuna/distrito estás a morar ?",
      },
      {
        type: "text",
        name: "Município",
        required: true,
        placeHolder: "Em qual município estás a morar ?",
      },
      {
        type: "text",
        name: "Província",
        required: true,
        placeHolder: "Em qual província estás a morar?",
      },
      {
        type: "number",
        name: "Telefone (1)",
        required: true,
      },

      {
        type: "email",
        name: "Email",
        required: true,
      },
    ],
  ],

  [
    "Dados De Ensino",
    [
      {
        type: "text",
        required: true,
        name: "Escola onde fez o I ciclo",
        placeHolder: "Digite o nome da escola",
      },

      {
        type: "text",
        required: true,
        name: "Ano",
        placeHolder: "Digite o no",
      },
      {
        type: "text",
        required: true,
        name: "Bairro",
        placeHolder: " Em que bairro frequentou o I Ciclo?",
      },
      {
        type: "text",
        required: true,
        name: "Município",
        placeHolder: "Em que municipio frequentou o I Ciclo?",
      },
      {
        type: "text",
        required: true,
        name: "Provincia",
        placeHolder: "Em que província frequentou o I Ciclo?",
      },
      {
        type: "text",
        required: true,
        name: "País",
        placeHolder: "Em que país frequentou o I Ciclo?",
      },
    ],
  ],
  [
    "Dados De Ensino",
    [
      {
        type: "text",
        required: true,
        name: "Escola onde fez o curso de  Enfermagem",
        placeHolder: "Qual o nome da escola onde fez o ensino médio ?",
      },

      {
        type: "text",
        required: true,
        name: "Ano",
        placeHolder: "Em que ano frequentou o ensino médio?",
      },
      {
        type: "text",
        required: true,
        name: "Bairro/distrito Urbano",
        placeHolder: "Em que bairro frequentou o ensino médio?",
      },
      {
        type: "text",
        required: true,
        name: "Município",
        placeHolder: "Em que município frequentou o ensino médio?",
      },
      {
        type: "text",
        required: true,
        name: "Provincia",
        placeHolder: "Em que província frequentou o ensino médio?",
      },
      {
        type: "text",
        required: true,
        name: "País",
        placeHolder: "Em que país frequentou o ensino médio?",
      },
      {
        type: "select",
        required: true,
        name: "Nível acadêmico actual",
        options: [
          "Técnico Médio",
          "Técnico Profissional",
          "Licenciado",
          "Mestrado",
        ],
      },
    ],
  ],
  [
    "Emolumentos a pagar | TOTAL :",
    [
      {
        type: "checkbox",
        preco: 300,
        id: "check-box",
        required: true,
        name: "Incrição",
      },

      {
        type: "checkbox",
        id: "check-box",
        preco: 300,
        required: true,
        name: "Carteira",
      },
      {
        type: "checkbox",
        id: "check-box",
        preco: 300,
        required: true,
        name: "Quotas",
      },
      {
        type: "checkbox",
        id: "check-box",
        preco: 300,
        required: true,
        name: "Multa",
      },
      {
        type: "checkbox",
        id: "check-box",
        preco: 300,
        required: true,
        name: "Código de Ética",
        
      },
      {
        type: "checkbox",
        id: "check-box",
        preco: 300,
        required: true,
        name: "Estatuto",
       
      },
      {
        type: "date",
        preco: 300,
        required: true,
        name: "do periodo de",
      },
      {
        type: "checkbox",
        id: "check-box",
        preco: 300,
        required: true,
        name: "Licença de Aprendizagem",
       
      },
  
    ],
  ],
  [
    ["Pagamento de emolumentos via MULTICAIXA EXPRESS"],[
      {
        type: "number",
        express:true,
        required: true,
        name: "Telefone express"
       
      },
    ]
  ]
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
