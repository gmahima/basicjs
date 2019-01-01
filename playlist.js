var playList = [
  ['I Did It My Way', 'a1'],
  ['Respect', 'a2'],
  ['Imagine', 'a3'],
  ['Born to Run', 'a4'],
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i ++) {
    listHTML += '<li>' + songs[i][0] + songs[i][1] + '</li>';
    // for (var j = 0; j < songs[i].length; j++) {
    //       // listHTML += '<li>' + songs[i][j] + '</li>';
    // }
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);



/*
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
*/
