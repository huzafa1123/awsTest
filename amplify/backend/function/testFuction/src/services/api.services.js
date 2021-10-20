const Amplify = require("@aws-amplify/api");
const Queries = require("./api.queries");

const init = (apiKey, url) => {
  const myAppConfig = {
    aws_appsync_graphqlEndpoint: url,
    aws_appsync_region: process.env.REGION,
    aws_appsync_apiKey: apiKey,
  };
  Amplify.API.configure(myAppConfig);
};
const execute = async ({ statement, name }, variables) => {
  const operation = Amplify.graphqlOperation(statement, variables);
  const { data } = await Amplify.API.graphql({
    ...operation,
    authMode: "API_KEY",
  });
  return data[name];
};
const listUser = () => execute(Queries.listUser);
module.exports = {
  listUser,
  init,
};
