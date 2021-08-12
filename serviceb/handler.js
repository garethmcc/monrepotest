'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World! And an edit',
        input: event,
      },
      null,
      2
    ),
  };
};
