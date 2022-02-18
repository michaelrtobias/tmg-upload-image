const dotenv = require("dotenv").config();
const AWS = require("aws-sdk");

module.exports = async function (body) {
  const S3_Bucket = process.env.BUCKET;
  const s3 = new AWS.S3();
  const fileName = body.fileName;
  const fileType = body.fileType;
  const s3Params = {
    Bucket: S3_Bucket,
    Key: fileName,
    Expires: 500,
    ContentType: fileType,
    ACL: "public-read",
  };

  try {
    const imageURL = await s3.getSignedUrl("putObject", s3Params);
    const result = {
      signedRequest: imageURL,
      url: `https://${S3_Bucket}.s3.amazonaws.com/${fileName}`,
    };
    console.log(result);
    return result;
  } catch (e) {
    console.log(e.message);
    return {
      statusCode: 500,
      body: JSON.stringify(e.message),
    };
  }
};
