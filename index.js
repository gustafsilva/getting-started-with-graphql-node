const { GraphQLServer } = require("graphql-yoga");
const {typeDefs, resolvers} = require("./src/index");

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log("Server is running on http://localhost::4000"));