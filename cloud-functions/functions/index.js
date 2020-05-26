const functions = require('firebase-functions');

const app = require('express')();
const cors = require('cors');
const {searchImageByKeyword} = require('./unsplash');
const {getImageLabels} = require('./cloud-vision');
const {signIn, updateUserProgress} = require('./users');

app.use(cors());

exports.api = functions.region('asia-northeast1').https.onRequest(app);
app.post('/login', signIn);
app.post('/updateProgress', updateUserProgress);

exports.getImageLabels = functions.region('asia-northeast1').https.onRequest(getImageLabels);
exports.searchImageByKeyword = functions.region('asia-northeast1').https.onRequest(searchImageByKeyword);
