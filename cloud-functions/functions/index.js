const functions = require('firebase-functions');

const app = require('express')('cors');
const cors = require('cors');
app.use(cors());

const {getImageLabels} = require('./vision-functions/index');

exports.getImageLabels = functions.region('asia-northeast1').https.onRequest(getImageLabels);
