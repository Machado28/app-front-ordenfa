import { FaHome } from "react-icons/fa";
const data = [
  {
    title: "Início",
    path: "/",
    icon: <FaHome></FaHome>,
    
  },
  
  {
    title: "Sobre",
    path: "/sobre",
    icon: <FaHome></FaHome>,
  },

  {
    title: "Minha carteira",
    option: [
      {
        title: "carteira profissional- técnico",
        path: "/minhaCarteiraTecnico",
      
      },
      {
        title: "Licença de apredizagem (estágio)",
        path: "/minhaLicencaTecnico",
      },
      
    ],
  },
  {
    title: "inscrição",
    path: "/inscricao",
  },
];
export default data;

export const dataSubNav = [
  {
    path: "/carteiral/licenciado",
    title: "Licenciado",
  },
  {
    path: "/carteiral/TécnicnoMédio",
    title: "Técino Médio",
  },
  {
    path: "/carteiral/Técnicno",
    title: "Técino de Curso",
  },
  {
    path: "/carteiral/aprendizagem",
    title: "Licença de Apredizagem",
  },
];

export const dataTop = [
  {
    title: "WhatssApp | +244 929-599-439",
    path: "http://whatssap.api",
  },
  {
    title: "Email | ordenfa.support@gmail.com",
    path: "http://gmail/ordenfa.support@gmail.com",
  },
];
