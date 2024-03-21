const firebaseConfig = {
  apiKey: "AIzaSyCUWx5yuHeh9a9NDM0afwSV8XtnqSkmruE",
  authDomain: "musicambiquepayments.firebaseapp.com",
  projectId: "musicambiquepayments",
  storageBucket: "musicambiquepayments.appspot.com",
  messagingSenderId: "755602795566",
  appId: "1:755602795566:web:dcf6ac795b6b292d4483bf",
  measurementId: "G-VLCMEXX5MV"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyB7i2w1IFY3nhrJYmYvWNVVAWYmUxM1CIQ",
//   authDomain: "musicambiquepayment.firebaseapp.com",
//   projectId: "musicambiquepayment",
//   storageBucket: "musicambiquepayment.appspot.com",
//   messagingSenderId: "543766316035",
//   appId: "1:543766316035:web:07e6e1d87e29e1b4483a36",
//   measurementId: "G-PW62J53DZ0"
// }
// firebase.initializeApp(firebaseConfig);
const functions = require('firebase-functions')
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 5000

const payment = require('./src/functions/cbpayment')
const paymentB2C = require('./src/functions/bcpayment')
const paymentC2BB2C = require('./src/functions/cbbcpayment')

// console.log(payment)

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('PaymentsDS with Express')
})

app.route('/cb').post(payment.payment)
app.route('/bc').post(paymentB2C.paymentB2C)
app.route('/cbbc').post(paymentC2BB2C.payment)

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

exports.payments = functions.https.onRequest(app)