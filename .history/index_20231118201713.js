const {ApolloServer} = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const Pots = require('./models/Post')
const {MONODB} = require('./config')

const typeDefs = gql`
    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type Query{
        getPosts: [Post]
    }
`;

const resolvers = {
    Query: {
        async getPosts(){
            try {
                const posts = await Post.find();
                return posts;
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONODB)
    .then(() =>{
        console.log('MongoDB connected')
        return server.listen({port: 5000})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    });