const { ApolloServer, gql } = require('apollo-server');

// # 编写一个查询类型定义
const typeDefs = gql`
    type Query {
        hello: String,
        ping: String,
    }
`;

// # 编写一个查询解析器
const resolvers = {
    Query: {
        hello: function () {
            return "GraphQL!"
        },
        ping: () => {
            return "pong."
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen(3000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});