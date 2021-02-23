//schema is where you define your types
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Item {
    item: String
  }

  type Query {
    items: [Item]
  }
`;

// Apollo Server needs to know how to populate data for every field in your schema so that it can respond to requests for that data. To accomplish this, it uses resolvers.
const resolvers = {
  Query: {
    items: () => items,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

const items = [
  {
    item: 'Eggs',
  },
  {
    item: 'Ham',
  },
  {
    item: 'Cheese',
  },
];

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
