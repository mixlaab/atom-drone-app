require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHQL_SERVER: process.env.GRAPHQL_SERVER,
  },
};
