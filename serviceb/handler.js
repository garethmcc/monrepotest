'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'CHANGED FOUR TIMES',
        input: event,
      },
      null,
      2
    ),
  };
};
