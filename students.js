var student;
console.log(students);

function print(data) {
  document.write(data + "</br>");
}
function printObjectInfo (object) {
  for (var key in object) {
    print(key + ": " + object[key]);
  }
}


// function getAllInfo(array) {
//   for (i = 0; i < array.length; i++) {
//     printObjectInfo(array[i]);
//   }
// }

function getSelectedStudentInfo (array) {
  while (true) {
    var name = prompt("name");
    if (name == "quit" || name == null) {
      break;
    }
    else {
      for (i = 0; i < array.length; i++) {
        student = students[i];
          if (name == student.name) {
            printObjectInfo(student);
          }
       }
    }


   }
  }


  getSelectedStudentInfo(students);
