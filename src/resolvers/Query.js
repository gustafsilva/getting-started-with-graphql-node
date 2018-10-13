const info = () => {
  return "API OK!";
}

const feed = (parent, args, context, info) => {
  return context.db.query.links({}, info);
};

module.exports = {
  info,
  feed
}