const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET, getUserId } = require("../utils");

const signup = async (parent, args, context) => {
  const password = await bcrypt.hash(args.password, 10);
  
  const user = await context.db.mutation.createUser({
    data: { ...args, password }
  }, `{ id }`);

  const token = jwt.sign({ userID: user.id }, APP_SECRET);

  return {
    token,
    user
  }
}

const login = async (parent, args, context) => {
  const user = await context.db.query.user({ where: { email: args.email }}, `{ id password }`);
  
  if (!user) {
    throw new Error("No such user found");
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userID: user.id }, APP_SECRET);

  return {
    token,
    user
  }

}

const post = (parent, args, context, info) => {
  const userId = getUserId(context);

  return context.db.mutation.createLink({
    data: {
      url: args.url,
      description: args.description,
      postedBy: { connect: { id: userId }}
    }
  }, info);
}

const vote = (parent, args, context, info) => {
  const userId = getUserId(context);

  return context.db.mutation.createVote({
    data: {
      user: { connect: { id: userId } },
      link: { connect: { id: args.linkId}},
    }
  }, info);
}

module.exports = {
  signup,
  login,
  post,
  vote
}