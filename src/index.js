const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const AuthPayload = require("./resolvers/AuthPayload");
const Subscription = require("./resolvers/Subscription");

const resolvers = {
  Query,
  Mutation,
  AuthPayload,
  Subscription
}

module.exports = {
  resolvers
};