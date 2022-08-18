const { gql } = require("apollo-server-express");

const bookTypeDefs = gql`
  type Book {
    id: ID
    name: String
    subName: String
    description: String
    corver: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

module.exports = bookTypeDefs;
