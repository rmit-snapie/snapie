const {unsplashClientId} = require('../environments/keys');
const {unsplashApi} = require('../environments/constants');
const axios = require('axios').default;
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient({keyFilename: './environments/vision-api-key.json'});
const {cloudVisionQueryParams, cloudVisionQueryOptions} = require('../environments/constants');

/* this function accepts a base 64 encoded string of an image and returns names of objects inside that image
add rawResult field as true in order to get raw result, otherwise, return label and confidence score
*/
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
    const labelsWithUrls = [];
    response.forEach((res) => {
      labels.push({description: res.description, score: res.score});
    });
    const promises = [];
    labels.forEach((label) => {
      promises.push(
          axios.get(`${unsplashApi}/search/photos?client_id=${unsplashClientId}&query=${label.description}&per_page=5&page=1`)
              .then((response) => {
                const urls = response.data['results'];
                const returnUrls = urls.map((value) => {return value.urls.small});
                return labelsWithUrls.push({description: label.description, score: label.score, urls: returnUrls})
              })
              .catch(err => {
                console.error(err);
              })
      )
    });
    return Promise.all(promises)
        .then(() => {
          labelsWithUrls.sort((a,b) => {
            return b.score - a.score
          });
          return res.send(labelsWithUrls);
        })
        .catch(err => {
          console.log(err)
        });
  } catch (err) {
    console.error(err);
    return res.send(err);
  }
};
