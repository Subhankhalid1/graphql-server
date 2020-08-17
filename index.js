


const { ApolloServer, gql } = require('apollo-server');


const students = [
    {
        "id":1,
        "name": "Subhan",
        "email": "rsubhankhalid@gmail.com",
        "age": 22
    },
    {
        "id":2,
        "name": "Zeeshan",
        "email": "izeekhalid007@gmail.com",
        "age": 26
    },
    {
        "id":3,
        "name": "Nauman",
        "email": "numkhand@gmail.com",
        "age": 27
    }
]

const resolvers = {
    Query: {
      students: () => students,
    },
  };


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  
  type Student {
      id:Int
    name: String
    email: String
    age:Int
  }

  type Query {
    students: [Student]
  }
`;


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});