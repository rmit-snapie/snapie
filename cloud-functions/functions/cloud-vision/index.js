const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient({keyFilename: './environments/vision-api-key.json'});
const {cloudVisionQueryParams, cloudVisionQueryOptions} = require('../environments/constants');

//this function accepts a base 64 encoded string of an image
//and returns names of objects inside that image
//add rawResult field as true in order to get raw result
//otherwise, return label and confidence score
exports.getImageLabels = async (req, res) => {
  const expressRequest = req.body;

  const requestObject = {
    image: {
      content: expressRequest[cloudVisionQueryParams.IMAGE]
    },
    features: [
      {
        type: cloudVisionQueryOptions.LABEL_DETECTION,
        maxResults: expressRequest[cloudVisionQueryParams.MAX_RESULTS]
      },
    ]
  };

  try {
    const requestToVision = await client.annotateImage(requestObject);
    const response = requestToVision[0]['labelAnnotations'];
    const labels = [];
    response.forEach((res) => {
      labels.push({label: res.description, score: res.score});
    });
    return expressRequest[cloudVisionQueryParams.RAW_RESULT] === "true" ? res.send(response) : res.send(labels);
  } catch (err) {
    console.error(err);
    return res.send(err);
  }
};
