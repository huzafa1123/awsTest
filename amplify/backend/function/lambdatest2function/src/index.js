const axios = require("axios");
const graphql = require("graphql");
const gql = require("graphql-tag");
const { print } = graphql;

const listTodos = gql`
  query listTodos {
    listTodos {
      items {
        id
        name
        description
      }
    }
  }
`;

exports.handler = async (event) => {
  try {
    console.log("2nd function");
    const graphqlData = await axios({
      url: process.env.API_TEST_GRAPHQLAPIENDPOINTOUTPUT,
      method: "post",
      headers: {
        "x-api-key": process.env.API_TEST_GRAPHQLAPIKEYOUTPUT,
      },
      data: {
        query: print(listTodos),
      },
    });
    const body = {
      graphqlData: graphqlData.data.data.listTodos,
    };
    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (err) {
    console.log("error posting to appsync: ", err);
  }
};
