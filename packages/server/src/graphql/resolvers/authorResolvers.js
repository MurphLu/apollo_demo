const Author = require("../../model/Author.model")
const log = require('../../utils/logger')

const authorResolvers = {
  Query: {
    authors: async () => {
      return await Author.find();
    }
  },
  Mutation: {
    createAuthor: async (_parent, args, _context, _info) => {

      const { name } = args.author;
      log.info('add author: "%s"', name);

      const exists = await Author.findOne({ 'name': name });
      if(exists) return exists;
      const author = new Author({ name });
      await author.save();
      return author;
    },
    deleteAuthor: async (_parent, args, _context, _info) => {
      const { id } = args;
      log.info('delete author: "%s"', id);
      const result = await Author.findByIdAndDelete(id);
      log.info('delete author successful: "%s"', result);
      return "Author Deleted";
    }
  }
}

module.exports = authorResolvers;
