const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient({keyFilename: './environments/vision-api-key.json'});
const {cloudVisionQueryParams, cloudVisionQueryOptioptions} = require('../environments/constants');

exports.getImageLabels = async (req, res) => {
  const expressRequest = req.body;

  const requestObject = {
    image: {
      content: expressRequest[cloudVisionQueryParams.IMAGE]
    },
    features: [
      {
        type: cloudVisionQueryOptioptions.LABEL_DETECTION,
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
