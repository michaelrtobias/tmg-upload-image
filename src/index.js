const AWS = require("aws-sdk");
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
};
