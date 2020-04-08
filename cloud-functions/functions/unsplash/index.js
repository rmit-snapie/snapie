const {unsplashClientId} = require('../environments/keys');
const {unsplashApi, unsplashApiParams} = require('../environments/constants');
const axios = require('axios').default;

//this function sends a request with a keyword to Unsplash and returns an array of objects
//containing urls of an image related to that keyword
exports.searchImageByKeyword = async (req,res) => {
  const keyword = req.body[unsplashApiParams.KEYWORD];

  try {
    const requestUrl = `${unsplashApi}/search/photos?client_id=${unsplashClientId}&query=${keyword}&per_page=5&page=1`;
    const response = await axios.get(requestUrl);
    const results = response.data['results'];
    const urls = [];
    results.forEach((result) => {
      urls.push(result['urls']);
    });

    return res.send(urls);
  }
  catch (err) {
    return res.send(err);
  }
};
