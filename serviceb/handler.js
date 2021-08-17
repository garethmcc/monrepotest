'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'CHANGED THREE TIMES',
        input: event,
      },
      null,
      2
    ),
  };
};
