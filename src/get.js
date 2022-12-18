// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

const ACCESS_KEY_ID = 'key';
const SECRET_ACCESS_KEY = 'key';

// Set the region 
AWS.config.update({
  region: 'us-east-2',
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: 'todo',
  Key: {
    'id': {N: '1671363542355'}
  },
  ProjectionExpression: 'task'
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});
