const perfis = [
  {
    id: 1,
    nome: "Comum",
  },
  {
    id: 2,
    nome: "Admin",
  },
];

const usuarios = [
  {
    id: 1,
    nome: "Andre",
    email: "andre@email.com",
    idade: 21,
    perfil_id: 2,
  },
  {
    id: 2,
    nome: "Evelin",
    email: "evelin@email.com",
    idade: 22,
    perfil_id: 1,
  },
  {
    id: 3,
    nome: "Juninho",
    email: "juninho@email.com",
    idade: 17,
    perfil_id: 1,
  },
];

module.exports = { usuarios, perfis };
