const uploadImage = require("./uploadImage.js");
exports.handler = async (event) => {
  let { body } = event;
  body = JSON.parse(body);
  console.log("body", body);
  try {
    const results = await uploadImage(body);
    let response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
      },
      body: JSON.stringify(results),
    };
    return response;
  } catch (e) {
    console.log(e.message);
    return {
      statusCode: 500,
      body: JSON.stringify(e.message),
    };
  }
};
