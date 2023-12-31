const {ApolloServer} = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const {MONODB} = require('./config')

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