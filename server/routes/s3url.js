const express = require('express');
const authenticate = require('../middlewares/authentication');
const s3 = require('../config/s3');

const router = express.Router();


router.get('/upload/generate-presigned-url', (req, res) => {
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: req.query.filename, // File names
        Expires: 60, // URL expiration in seconds
        ContentType: req.query.filetype, // File MIME type
    };

    s3.getSignedUrl('putObject', params, (err, url) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error generating presigned URL');
        }
        res.send({ url });
    });

});

router.get('/download/generate-presigned-url', (req, res) => {
    const filename = req.query.filename;

    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: req.query.filename, // The filename to be downloaded
        Expires: 60 * 5, // Expiration time for the pre-signed URL
    };

    s3.getSignedUrl('getObject', params, (err, url) => {
        if (err) {
            return res.status(500).json({ error: 'Error generating presigned URL' });
        }

        res.json({ url });
    });
});

module.exports = router