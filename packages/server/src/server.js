const express = require("express");
const { ApolloServer } = require("apollo-server-express");

async function startServer() {
  const app = express();
  app.use((req, res) => {
    res.send('Hello from express apollo server')
  })
  app.listen(4000, () => console.log('Server in running on port 4000 \nyou can visit: http://localhost:4000'));
}

startServer();
