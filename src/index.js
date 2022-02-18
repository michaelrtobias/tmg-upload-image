const uploadImage = require("./uploadImage.js");
exports.handler = async (event) => {
  const { body } = event;
  try {
    console.log("event", event);
    const results = await uploadImage(body);
    let response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
      },
      body: body,
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
};
