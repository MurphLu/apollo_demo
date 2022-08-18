const { gql } = require("apollo-server-express");

const tagTypeDefs = gql`
  type Tag {
    id: ID
    name: String
  }

  type Query {
    tags: [Tag]
    tag(id: ID): Tag
  }

  input TagInput{
    name: String
  }

  type Mutation {
    createTag(tag: TagInput): Tag
    deleteTag(id: ID): String
  }
`

module.exports = tagTypeDefs;

