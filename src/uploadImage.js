const dotenv = require("dotenv").config();
const AWS = require("aws-sdk");

module.exports = async function (body) {
  const Bucket = process.env.BUCKET;
  const s3 = new AWS.S3();
  const fileName = body.fileName;
  const fileType = body.fileType;

  const s3Params = {
    Bucket: Bucket,
    Key: fileName,
    Expires: 500,
    ContentType: fileType,
    ACL: "public-read",
  };
  try {
    const imageURL = await s3.getSignedUrl("putObject", s3Params);
    const result = {
      signedRequest: imageURL,
      url: `https://${Bucket}.s3.amazonaws.com/${fileName}`,
    };
    return result;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};
