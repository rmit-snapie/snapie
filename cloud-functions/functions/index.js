const functions = require('firebase-functions');

const app = require('express')();
const cors = require('cors');
const {searchImageByKeyword} = require('./unsplash');
const {getImageLabels} = require('./cloud-vision/index');

app.use(cors());

exports.getImageLabels = functions.region('asia-northeast1').https.onRequest(getImageLabels);
exports.searchImageByKeyword = functions.region('asia-northeast1').https.onRequest(searchImageByKeyword);
