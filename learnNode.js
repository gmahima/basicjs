// function printMessage(username, badgeCount, points) {
//
//
//   const message = `${username} has ${badgeCount} badges and ${points} points`;
// }
const profile = require('./nodeProfile.js');

console.log(process.argv);
 const users = process.argv.slice(2);
profile.get(users[0]);
// users.forEach(getProfile);
