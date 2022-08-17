const express = require("express");
const { ApolloServer, gql, makeExecutableSchema } = require("apollo-server-express");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require('./graphql/resolvers');

async function startServer() {
  const app = express();

  // 实例化 ApolloServer, 并传入 typeDefs，resolvers
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true
  })

  await apolloServer.start();

  // 实际调用的是 app.use(apolloServer.getMiddleware())
  // 使用 apolloServer 处理 path 为 /graphql 的请求
  apolloServer.applyMiddleware({ app: app });

  app.use((req, res) => {
    res.send('Hello from express apollo server')
  })
  app.listen(4000, () => console.log('Server in running on port 4000 \nyou can visit: http://localhost:4000'));
}

startServer();
