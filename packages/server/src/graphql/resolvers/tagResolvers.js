const Tag = require('../../model/Tag.model')
const log = require('../../utils/logger')
const tagResolvers = {
  Query: {
    tags: async () => {
      log.info('query all tags')
      return await Tag.find();
    },
    tag: async ( _parent, { id }, _context, _info ) => {
      log.info('query tag with id: %s', id)
      return await Tag.findById(id);
    },
  },

  Mutation: {
    createTag: async (_parent, args, _context, _info) => {
      const { name } = args.tag;
      log.info('create tag with name: %s', name);
      const exists = await Tag.findOne({ 'name': name });
      if(exists) {
        log.info('tag name: "%s" exists, will return the exists tag', name);
        return exists
      };
      const tag = new Tag({ name });
      await tag.save();
      log.info('create tag: "%s" successful', name);
      return tag;
    },

    deleteTag: async (_parent, args, _context, _info) => {
      const { id } = args;
      log.info('delete tag: "%s"', id);
      const result = await Tag.findByIdAndDelete(id);
      log.info('delete tag successful: "%s"', result);
      return "Tag Deleted";
    }
  }
}

module.exports = tagResolvers;
