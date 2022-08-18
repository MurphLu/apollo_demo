const Book = require("../../model/Book.model")

const bookResolvers = {
  Query: {
    books: async () => {
      return await Book.find();
    }
  }
}

module.exports = bookResolvers;
