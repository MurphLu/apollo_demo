const { gql } = require("apollo-server-express");

const authorTypeDefs = gql`
  type Author {
    id: ID
    name: String
  }

  type Query {
    authors: [Author]
    author(id: ID): Author
  }

  input AuthorInput{
    name: String
  }

  type Mutation {
    createAuthor(author: AuthorInput): Author
    deleteAuthor(id: ID): String
  }
`

module.exports = authorTypeDefs;
