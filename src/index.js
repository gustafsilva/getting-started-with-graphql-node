const typeDefs = `
type Query {
 info: String! 
}
`;

const resolvers = {
  Query: {
    info: () => 'OK!'
  }
}

module.exports = {
  typeDefs,
  resolvers
};