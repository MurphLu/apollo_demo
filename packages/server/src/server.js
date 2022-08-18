const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require('./graphql/resolvers');
const mongnConn = require('./mongo');
const apolloServer = require("./apolloServer");

async function startServer() {
  const app = express();
  try {
    console.log("connect to mongodb...")
    await mongnConn();
    console.log("connected to mongodb")

    await apolloServer.start();

    // 实际调用的是 app.use(apolloServer.getMiddleware())
    // 使用 apolloServer 处理 path 为 /graphql 的请求
    apolloServer.applyMiddleware({ app: app });


    app.use((req, res) => {
      res.send('Hello from express apollo server')
    })
    app.listen(4000, () => console.log('Server in running on port 4000 \nyou can visit: http://localhost:4000'));
  } catch(err) {
    console.log(err);
  }
}

startServer();
