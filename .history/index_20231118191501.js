const {ApolloServer} = require("apollo-server");
const gql = require("graphql-tag");

const typeDefs = gql`
    type Query{
        sayHi: String!
    }
`

const resolvers = {
    Query: {
        sayHi: () => "Hello world"
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({port: 5001}).then((res) => {
    console.log(`Server running at ${res.url}`);
});