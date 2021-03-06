/* eslint no-console: ["error", { allow: ["info"] }] */

const { GraphQLServer } = require("graphql-yoga");
const { resolvers } = require("./src/index");
const { Prisma } = require("prisma-binding");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (req) => ({
    ...req,
    db: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: "http://localhost:4466",
      debug: true,
    }),
  })
});

server.start(() => console.info("Server is running on http://localhost:4000"));