'use strict';
const fetch = require('node-fetch')
const bcrypt = require('bcryptjs')
module.exports.hello = async (event, context) => {
    await context.serverlessSdk.span('CHANGED ONCE', async () => {
        return new Promise((resolve, reject) => {
            bcrypt.hash("Some change", 10, () => {
            bcrypt.hash("Some change", 10, () => {
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
