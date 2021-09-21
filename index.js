import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
//그래프ql 서버 생성
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("GraphQL Server Running"));
