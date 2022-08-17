// Resolvers tell Apollo Server how to fetch the data associated with a particular type
const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
  }
};

module.exports = resolvers;
