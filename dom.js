// const myHeading = document.getElementsByTagName("h1")[0];
// const myButton = document.getElementById("myButton");
// const myText = document.getElementById('myText');
//
// myButton.addEventListener('click', () => {
//   myHeading.style.color = myText.value;
// }
//
//
//
// );
// const myList = document.querySelectorAll('li');
//
// for (let i=0; i<myList.length; i++) {
//   myList[i].style.color = 'purple';
// }
const descriptionInput = document.querySelector("input.description");
const descriptionP = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description");
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('#list');
const addItemInput = document.querySelector('input.addItem');
const addItemButton = document.querySelector('button.addItem');

const ul = listDiv.querySelector('ul');
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'block') {
    listDiv.style.display = 'none';
    toggleList.innerHTML = 'show list';
  }
  else {
    listDiv.style.display = 'block';
    toggleList.innerHTML = 'hide list';
  }


});
descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ":"
  descriptionInput.value = "";
});


addItemButton.addEventListener('click', () => {
// ul.innerHTML += "<li>" + addItemInput.value + "</li>";
let li = document.createElement('li');
li.textContent = addItemInput.value;
ul.appendChild(li);
attachListItemButtons(li);
addItemInput.value = "";

});




const listItems = document.querySelectorAll('ul.description li');
var bg;
// listDiv.addEventListener('mouseover', (event) => {
//   if (event.target.tagName == "LI") {
//     bg = event.target.style.backgroundColor;
//
//       event.target.style.backgroundColor = "skyblue";
//     }
//
//
//   });
//
//
//   listDiv.addEventListener('mouseout', (event) => {
//     if (event.target.tagName == "LI") {
//       event.target.style.backgroundColor = bg;
//     }
//
//   });
//
//
//
// document.addEventListener('click', (event) => {
//   console.log(event.target);
// });
function attachListItemButtons(li) {
  let up= document.createElement('button');
  up.className = 'up';
  up.textContent = "up";
  li.appendChild(up);


  let down= document.createElement('button');
  down.className = 'down';
  down.textContent = 'down';
  li.appendChild(down);
  let remove= document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'remove';
  li.appendChild(remove);

}
var children = ul.children;
for (i=0; i<children.length; i++) {
  attachListItemButtons(children[i]);
}





ul.addEventListener('click', (event) => {

  if (event.target.tagName == "BUTTON") {
    var li = event.target.parentNode;
    var ulp = li.parentNode;
    var prevLi = li.previousElementSibling;
    var nextLi = li.nextElementSibling;
    if (event.target.className == 'remove') {
      ulp.removeChild(li);
     }
    if (event.target.className == 'up' && prevLi) {
      ulp.insertBefore(li, prevLi);
    }

    if (event.target.className == 'down' && nextLi) {
      ulp.insertBefore(nextLi, li);
    }
  }
});

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;
firstLi.style.backgroundColor = 'purple';
lastLi.style.backgroundColor = 'green';
