const AWS = require('aws-sdk');

const ACCESS_KEY_ID = 'key';
const SECRET_ACCESS_KEY = 'key';
const REGION = 'us-east-2';  // specify the region here

AWS.config.update({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: REGION
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'todo',
  Key: {
    'id': {
      N: '1671363542355'
    }
  },
  UpdateExpression: 'set task = :value',
  ExpressionAttributeValues: {
    ':value': {
      S: 'hello world'
    }
  }
};

dynamodb.updateItem(params, (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});