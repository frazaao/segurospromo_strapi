module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: env.bool("ENABLE_GRAPHQL_PLAYGROUND", false),
      apolloServer: {
        tracing: false,
        introspection: env.bool("ENABLE_GRAPHQL_PLAYGROUND", false),
      },
    },
  },
});
