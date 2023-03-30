const functions = require('firebase-functions');

exports.storeCheckout = functions.https.onRequest((request, response) => {
  response.send('Hello Pallacinio from Firebase!');
});
