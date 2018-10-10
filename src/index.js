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
    feed: () => (root, args, context, info) => {
      return context.db.query.links({}, info);
    },
  },
  Mutation: {
    post: (root, args, context, info) => {
      return context.db.mutation.createLink({
        data: {
          url: args.url,
          description: args.description
        }
      }, info);
    },
    updateLink: (root, args) => {
      let link = findLinkByID(links, args.id);
      if(link) {
        link.description = args.description;
        link.url = args.url;

        const linkIndex = links.indexOf(link);
        console.log(linkIndex);
        links[linkIndex] = link;
      }

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