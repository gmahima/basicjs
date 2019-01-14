const https = require('https');
const http = require('http');
function printErrorMessage(error) {
  console.error(error.message);
}
function getProfile(username) {
  try {
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
      if (response.statusCode == 200) {
        // console.dir(response);
       let body = '';
       response.on('data', (d) => {
         body += d.toString();
       });//closes .on
       response.on('end', () => {
         try{
           const profile = JSON.parse(body);
           // console.dir(profile.points.JavaScript);
         }
         catch(error) {
           printErrorMessage(error);
         }

       });//closes .onend


     } //closes if
     else {
       const message = `there was an error getting profile for ${username} ${http.STATUS_CODES[response.statusCode]} ${response.statusCode}`;
       const statusCodeError = new Error(message);
       printErrorMessage(statusCodeError);

     }
     request.on('error', error => printErrorMessage(error));

   });//closes callback of response
 }//closes try
  catch (error) {
    printErrorMessage(error);
  }
  // return 'hi';
} //closes function getProfile
module.exports.get = getProfile;
