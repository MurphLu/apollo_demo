### Apollo Graphql Client And Server Demo

#### Step1

Run `yarn init` in the project root fileder

Use `yarn` can manage projects with workspace

- 1. create `packages` fileders, and create `packages/server` for backend and `package/client` for frontend
- 2. install Docker in your device
- 3. create `docker-compose.yml` and run `docker-compose up -d` for setup and start mongodb service in Docker

#### Step2

`cd packages/server` run `yarn init` to init server project

cd to root path, and run 

`yarn workspace @demo/server add apollo-server-express express graphql mongoose`
`yarn workspace @demo/server add nodemon -D`

create `packages/server/src/server.js` and add scripts in `./package.json` and `./packages/server/package.json`

init the express server app in server.js

and then you can run `yarn dev:server` to start your server

