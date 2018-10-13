const newLinkSubscription = (parent, args, context, info) => {
  return context.db.subscription.link({
    where: {
      "mutation_in": ["CREATED"]
    },
  }, info);
}

const newLink = {
  subscribe: newLinkSubscription
}

module.exports = {
  newLink,
}