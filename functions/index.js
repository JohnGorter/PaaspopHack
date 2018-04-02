const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.cammood = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  const mood = req.query.mood;
  const camid = req.query.camid;
  console.log('seetting mood' + mood + ' for cam ' + camid);
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  admin.database().ref('/moods/' + camid + '/level').set(mood);
  admin.database().ref('/moods/' + camid + '/camid').set(camid);
  return res.end("thanks");
});
