/* Amplify Params - DO NOT EDIT
	API_TEST_GRAPHQLAPIENDPOINTOUTPUT
	API_TEST_GRAPHQLAPIIDOUTPUT
	API_TEST_GRAPHQLAPIKEYOUTPUT
	AUTH_JOINTPOOL4A40AFE5_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const APIService = require("./services/api.services");
let AWS = require("aws-sdk");
const { constant } = require("lodash");
// const secretManagerService = require("./services/secretManeger.services");
const lambda = new AWS.Lambda({ region: process.env.region });
exports.handler = async (event) => {
  // console.log("event", JSON.stringify(event));
  // const url = process.env.API_TEST_GRAPHQLAPIENDPOINTOUTPUT;
  // APIService.init("da2-ecyknlju6beplldghyup3gdjya", url);
  // console.log("init done");

  // try {
  //   const createUser = await APIService.listUser();
  //   console.log("response", createUser);
  //   return createUser;
  // } catch (e) {
  //   console.log(e);
  // }

  try {
    var params = {
      FunctionName: `lambdatest2function-${process.env.ENV}`,
      InvocationType: "Event",
      LogType: "Tail",
      Payload: JSON.stringify(event, null, 2),
    };
    console.log("testing");
    const data = await lambda.invoke(params).promise();
    console.log("data", data);
  } catch (e) {
    console.log("error", e);
  }
  return { statusCode: 200, response: "done" };
};
