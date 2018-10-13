const newLinkSubscription = (parent, args, context, info) => {
  return context.db.subscription.link({
    where: {
      "mutation_in": ["CREATED"]
    },
  }, info);
}

const newVoteSubscription = (parent, args, context, info) => {
  return context.db.subscription.vote({
    where: {
      "mutation_in": ["CREATED"]
    }
  }, info)
}

const newLink = {
  subscribe: newLinkSubscription
}
const newVote = {
  subscribe: newVoteSubscription
}

module.exports = {
  newLink,
  newVote
}