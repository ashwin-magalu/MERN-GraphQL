const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const { MONGODB } = require("./config.js");
const resolvers = require("./graphql/resolvers");

const pubsub = new PubSub(); // TODO: Used for publishing and subscribing

const PORT = process.env.PORT || 7000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((err) => console.log(err.message));
/* node index --> this will start our apollo server, apollo server has inbuilt express */
