const { gql } = require("apollo-server-express");

// Define Graphql Schema
// GraphQL server (including Apollo Server) uses a schema to define the structure of data that clients can query
// Query 查询
const typeDefs = gql`
  # 查询
  type Query {
    hello: String
  }
`;

module.exports = typeDefs;
