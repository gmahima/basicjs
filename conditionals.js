var day = 8;
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//
// if(day === 0) {
// 	console.log('Sunday');
// } else if (day === 1) {
// 	console.log('Monday');
// } else if (day === 2) {
// 	console.log('Tuesday');
// } else if (day === 3) {
// 	console.log('Wednesday');
// } else if (day === 4) {
// 	console.log('Thursday');
// } else if (day === 5) {
// 	console.log('Friday');
// } else if (day === 6) {
// 	console.log('Saturday');
// } else {
// 	console.log('Invalid Day');
// }
switch(day) {
  case 0:
  console.log(daysOfWeek[0]);
  break;
  case 1:
  console.log(daysOfWeek[1]);
  break;
  case 2:
  console.log(daysOfWeek[2]);
  break;
  case 3:
  console.log(daysOfWeek[3]);
  break;
  case 4:
  console.log(daysOfWeek[4]);
  break;
  case 5:
  console.log(daysOfWeek[5]);
  break;
  case 6:
  console.log(daysOfWeek[6]);
  break;
  default:
  console.log('Invalid');
  break;

}
var isTrue = false;
var result = isTrue ? 'true' : 'false';
console.log(result)



let and = true && 1 && 'cow'; //cow
and = false && 1 && true; // false
and = 0 && 1 && true; // 0
let or = 1 || 0; //1
 or = 0 || 1; //1
 or = 0 || false; //false



console.log (or)
