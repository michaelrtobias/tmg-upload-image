const AWS = require("aws-sdk");
<<<<<<< HEAD
exports.handler = async (event, context) => {
  try {
    console.log("event", event);
    let response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
      },
      body: event.body,
    };
    console.log("response:", response);
    return response;
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e.message),
    };
  }
=======
exports.handler = function ({ args: data }) {
  let results = data.contactInfo;
  try {
    console.log(results.first_name, "Jordan");
    console.log("results product type:", results.type);
    console.log(23);
  } catch (e) {
    throw e;
  }
  return results;
>>>>>>> 7831edb40110380ea84cd6f6894e5d8da374856f
};
