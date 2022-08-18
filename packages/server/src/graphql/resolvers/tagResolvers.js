const Tag = require('../../model/Tag.model')

const tagResolvers = {
  Query: {
    tags: async () => {
      console.log('process all tags');
      return await Tag.find();
    },
    tag: async ( _parent, { id }, _context, _info ) => {
      return await Tag.findById(id);
    },
  },

  Mutation: {
    createTag: async (_parent, args, _context, _info) => {
      console.log(args);
      console.log(Tag);
      const { name } = args.tag;
      const exists = await Tag.findOne({ 'name': name });
      if(exists) return exists;
      const tag = new Tag({ name });
      await tag.save();
      return tag;
    },

    deleteTag: async (_parent, args, _context, _info) => {
      const { id } = args;
      await Tag.findByIdAndDelete(id);
      return "Tag Deleted";
    }
  }
}

module.exports = tagResolvers;
