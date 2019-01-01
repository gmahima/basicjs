// var sampleArray = ["item 1", 1, false, "red"];
// console.log(sampleArray[1]);
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var someStates = [
"Andhra Pradesh(Hyderabad)",
"Arunachal Pradesh(Itanagar)",
"Assam(Dispur)",
];

function print (data) {
  document.write(data);
}

function printList (array) {
  var listHTML = "<ol>";
  for (i=0; i<array.length; i++) {
    listHTML += '<li>' + array[i] + '</li>'
  }
  listHTML += '</ol>'
  print(listHTML);
}
var item;
function searchArray (array,  item) {
  item = prompt("type a state");
  if (array.indexOf(item) != -1) {
    alert("it's there at index " + array.indexOf(item));
  }
  else {
    alert("it's not there");
  }
  alert(array.join(', ') + "are there");
}
searchArray(someStates, item);
