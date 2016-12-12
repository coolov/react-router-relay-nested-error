import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLUnionType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

const HomeType = new GraphQLObjectType({
  name: 'Home',
  fields: {
    hello: {
      type: GraphQLString,
    },
  },
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    name: {
      type: GraphQLString,
    },
  },
});
const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    home: {
      type: HomeType,
      resolve: () => {
        throw "Not found!";
        return {
          hello: 'Hello World',
        }
      }
    },
    user: {
      type: UserType,
      resolve: () => {
        return {
          name: 'Yetis Madin',
        }
      }
    }
  },
});

const Schema = new GraphQLSchema({ query: QueryType });

export default Schema;
