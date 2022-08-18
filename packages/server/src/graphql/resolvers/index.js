const helloResolver = require('./helloResolver');
const tagResolvers = require('./tagResolvers');
const bookResolvers = require('./bookResolvers')

const resolvers = [helloResolver, tagResolvers, bookResolvers];

module.exports = resolvers;
