'use strict';
const fetch = require('node-fetch')
const bcrypt = require('bcryptjs')
module.exports.hello = async (event, context) => {
  console.log('Hello')
    await context.serverlessSdk.span('another changes', async () => {
        return new Promise((resolve, reject) => {
            bcrypt.hash("Another change!!!", 10, () => {
                resolve()
            })
        })
    })
    await context.serverlessSdk.span('Dog Facts', async () => {
        return fetch('https://some-random-api.ml/facts/dog')
    })





  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Service a change',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
