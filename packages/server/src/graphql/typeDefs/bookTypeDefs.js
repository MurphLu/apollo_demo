const { gql } = require("apollo-server-express");

const bookTypeDefs = gql`
  type Book {
    id: ID
    name: String
    subName: String
    description: String
    corver: String
    author: [Author]
    tags: [Tag]
  }

  type Query {
    books: [Book]
    book(id: ID): Book
  }

  input BookInput {
    name: String
    subName: String
    description: String
    corver: String
    author: ID
    tags: [ID]
  }
  type Mutation {
    createBook(book: BookInput): Book
    deleteBook(id:ID): Book
  }
`

module.exports = bookTypeDefs;
