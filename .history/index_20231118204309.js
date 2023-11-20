const {ApolloServer} = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const typeDefs = require('./graphql/typeDefs')
const Post = require('./models/Post')
const {MONODB} = require('./config')

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