// function printMessage(username, badgeCount, points) {
//
//
//   const message = `${username} has ${badgeCount} badges and ${points} points`;
// }
const https = require('https');
function getProfile(username) {
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    // console.dir(response);
    let body = '';
    response.on('data', (d) => {
      body += d.toString();
    });
    response.on('end', () => {

      const profile = JSON.parse(body);
      console.dir(profile.points.JavaScript);
    });

  });
}
console.log(process.argv);
 const users = process.argv.slice(2);
 users.forEach(getProfile);
