const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("../graphql/typeDefs");
const resolvers = require('../graphql/resolvers');

// 实例化 ApolloServer, 并传入 typeDefs，resolvers
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true
})

module.exports = apolloServer;

