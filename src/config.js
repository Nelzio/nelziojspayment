const functions = require('firebase-functions');
var Client = require("@paymentsds/mpesa").Client
const dotenv = require('dotenv')
dotenv.config()

var client = new Client({
  apiKey: process.env.API_KEY, // API Key
  publicKey: process.env.PUBLIC_KEY, // Public Key
  serviceProviderCode: process.env.SERVICE_PROVIDER_CODE, // input_ServiceProviderCode
  userAgent: "MPesa",
  debugging: true,
  verifySSL: false,
})

// var client = new Client({
//   apiKey: functions.config().payments.apikey, // API Key
//   publicKey: functions.config().payments.publickey, // Public Key
//   serviceProviderCode: functions.config().payments.serviceprovidercode, // input_ServiceProviderCode
//   userAgent: "MPesa",
//   debugging: true,
//   verifySSL: false,
// })

module.exports = {
  client
}
