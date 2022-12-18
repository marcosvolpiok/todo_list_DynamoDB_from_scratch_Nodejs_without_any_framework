// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

const ACCESS_KEY_ID = 'key';
const SECRET_ACCESS_KEY = 'key';

// Set the region 
AWS.config.update({
  region: 'us-east-2',
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY});

// Create DynamoDB document client
var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

const id = Date.now();
console.log('iddd', id);
var params = {
  TableName: 'todo',
  Item: {
    'id': id,
    'task': 'buy milk',
  }
};

docClient.put(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
