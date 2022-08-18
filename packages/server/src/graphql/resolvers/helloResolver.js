// Resolvers tell Apollo Server how to fetch the data associated with a particular type
const helloResolver = {
  Query: {
    hello: () => {
      return "Hello World";
    },
  }
};

module.exports = helloResolver;
