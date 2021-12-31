const { usuarios, perfis } = require("../data/db");

module.exports = {
  ola() {
    return "Basta retornar uma string";
  },
  horaAtual() {
    return new Date();
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "André",
      email: "email@email.com",
      idade: 23,
      salario_real: 2500.0,
      vip: false,
    };
  },
  produtoEmDestaque() {
    return {
      nome: "Arroz",
      preco: 25.0,
      desconto: 0.5,
    };
  },
  numerosMegaSena() {
    const crescente = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map(() => parseInt(Math.random() * 60 + 1))
      .sort(crescente);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    const selecionados = usuarios.filter((u) => u.id == id);
    return selecionados ? selecionados[0] : null;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const perfisSelecionados = perfis.filter((p) => p.id === id);
    return perfisSelecionados ? perfisSelecionados[0] : null;
  },
};
