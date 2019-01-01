var ul = 10;
var answer = 10;
var attempts = 0;
var guess;
var win = false;
function randomNumberGenerator (upper) {
  return Math.floor(Math.random() * upper) + 1;
}

do {
  guess = prompt("guess a number in[1, " + ul + "]");

  if (parseInt(guess) == answer) {
    win = true;
  }
  attempts = attempts + 1
  if (attempts > ul) {
    alert("Oops! you lost. The answer was " + answer);
    break;
  }

}
while (! win)
alert("Congrats! the answer was " + answer + " you took " + attempts + "attempts to get it right");


// var upperLt = 10000;
// var randomNumber = randomNumberGenerator(upperLt);
// var guess;
// var attempts = 0;

// // while (guess !== randomNumber) {
// //   guess = randomNumberGenerator(upperLt);
// //   attempts++
// // }
// // document.write("the answer was " + randomNumber + " and the computer took " + attempts + " attempts to guess it!!")
// // var counter = 0;
// // while (counter < 10000) {
// //   var randomNumber = randomNumberGenerator(9);
// //   document.write(randomNumber + ' ');
// //   counter++
// //  }
// for (var i = 0; i < 10; i++) {
//   document.write(i + " ");
// }
