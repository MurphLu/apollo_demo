const Book = require("../../model/Book.model")

const bookResolvers = {
  Query: {
    books: async () => {
      return await Book.find().populate('tags');
    },
    book: async ( _parent, { id }, _context, _info ) => {
      return await Book.findById(id);
    },
  },
  Mutation: {
    createBook: async (_parent, args, _context, _info) =>{
      const { name, subName, description, corver, author, tags } = args.book;

      const newBook = new Book({
        name,
        subName,
        description,
        corver,
        author,
        tags
      })
      const exists = await Book.findOne({ 'name': name });
      if(exists) return exists
      console.log(newBook)
      await newBook.save()
      return newBook;
    },
    deleteBook: async (_parent, { id }, _context, _info) => {
      const result = await Book.findByIdAndDelete(id);
      return result
    }

  }
}

module.exports = bookResolvers;
