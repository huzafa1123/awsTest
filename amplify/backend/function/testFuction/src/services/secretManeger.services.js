const AWS = require("aws-sdk");

const getSecretManager = async () => {
  const secretsManager = new AWS.SecretsManager({
    region: process.env.REGION,
  });
  const apiKeySecret = await secretsManager
    .getSecretValue({ SecretId: "da2-ecyknlju6beplldghyup3gdjya" })
    .promise();
  if (!apiKeySecret) {
    throw new Error("Key Secret not found");
  }
  return apiKeySecret;
};

module.exports = {
  getSecretManager,
};
