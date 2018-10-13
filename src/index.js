const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const AuthPayload = require("./resolvers/AuthPayload");

const resolvers = {
  Query,
  Mutation,
  AuthPayload
}

module.exports = {
  resolvers
};