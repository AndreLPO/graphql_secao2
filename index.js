const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");

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

const resolvers = {
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    },
    perfil(usuario) {
      const perfisSelecionados = perfis.filter(
        (p) => p.id === usuario.perfil_id
      );
      return perfisSelecionados ? perfisSelecionados[0] : null;
    },
  },

  Produto: {
    precoComDesconto(produto) {
      return produto.preco * (1 - produto.desconto);
    },
  },

  // Consulta dos dados, pode consumir de qualquer lugar (Memória, API, BD, etc...)
  Query: {
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
  },
};

const server = new ApolloServer({
  typeDefs: importSchema("./schema/index.graphql"),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
