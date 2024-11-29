const aws = require('aws-sdk')
require('dotenv').config()

const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.BUCKET_REGION
const accessKey = process.env.ACCESS_KEY
const secretAccessKey = process.env.SECRET_ACCESS_KEY

const s3 = new aws.S3({
    region: bucketRegion,
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,

})

module.exports = s3