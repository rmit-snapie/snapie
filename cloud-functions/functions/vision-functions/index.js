const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient({keyFilename: './environments/vision-api-key.json'});

exports.getImageLabels = async (req, res) => {
    const imageBuffer = req.body['image'];
    const requestObject = {
        image: {
            content: imageBuffer
        },
        features: [
            {
                type: 'LABEL_DETECTION',
                maxResults: 3
            },
        ]
    };

    try {
        const requestToVision = await client.annotateImage(requestObject);
        const response = requestToVision[0]['labelAnnotations'];
        return res.send(response);
    }
    catch(err) {
        console.error(err);
        return res.send(err);
    }
};
