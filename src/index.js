let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length;

const findLinkByID = (links, id) => {
  return links.find((link) => link.id === id)
}

const resolvers = {
  Query: {
    info: () => "API OK!",
    feed: () => links,
    link: (root, args) => {
      return findLinkByID(links, args.id);
    }
  },
  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      }
      links.push(link);
      return link;
    },
    deleteLink: (root, args) => {
      link = findLinkByID(links, args.id);

      if(link) {
        links = links.filter((link) => link.id != args.id);
      }

      return link;
    }
    
  }
}

module.exports = {
  resolvers
};