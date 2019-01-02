// function Person() {
//   this.age = 0;
//
//   var self = this;
//
//   setInterval(function() {
//     self.age ++;
//   }, 1000);

//
// function person() {
//   this.age = 0;
//   setInterval(() => {
//     this.age += 1;
//   },1000);
// }


const sayHello = () => {
  console.log("Hello!");
}
const consiseSayHello = () => console.log("Hello!");


const add = (a,b) => {
  return a+b;
}
const consiseAdd = (a,b) => a+b;


const gift = (gift) => {return gift}
const consiseGift = gift => gift


const power = (a,b) => {
  return Math.pow(a,b)
}
const consisePower = (a,b) => Math.pow(a,b)

console.log(consiseAdd(1,2));
console.log(consisePower(6,3));
console.log(consiseGift("chocolates"))
