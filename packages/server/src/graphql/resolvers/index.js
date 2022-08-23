const helloResolver = require('./helloResolver');
const tagResolvers = require('./tagResolvers');
const bookResolvers = require('./bookResolvers')
const authorResolvers = require('./authorResolvers')

const resolvers = [helloResolver, tagResolvers, bookResolvers, authorResolvers];

module.exports = resolvers;
