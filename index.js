const { GraphQLServer } = require("graphql-yoga");
const { resolvers } = require("./src/index");
const { Prisma } = require("prisma-binding");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: "",
      secret: "getting-started-with-graphql-node",
      debug: true,
    }),
  })
});

server.start(() => console.log("Server is running on http://localhost:4000"));