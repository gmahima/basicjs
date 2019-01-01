var person = {
  name: "cherry",
  age: 3,
  student: true,
  likes: ["ice cream", "chocolate", "something else", 5, 7, 9, 11, 1, 2]
}
name = "dhdh";
console.log(person);

function print (data) {
  // var div = document.getElementById('js');
  // div.innerHTML = data + "</br>";
  document.write(data + '</br>');
}


function printObject (object) {
  for (key in object) {
    print(key + ': ' + object[key]);
  }
}

printObject(person);
