const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.getTitlesFromUrls = functions.https.onCall((data, context) => {
    console.log(data.sources)
    var titles = []
    
    return {
        titles: titles
    }
  });