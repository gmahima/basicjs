

class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  get activity () {
    const today = new Date();
    var hour = today.getHours();
    if (hour > 8 && hour< 20) {
      return 'playing';
    }
    else {
      return 'sleeping';
    }


  }
  set owner(owner) {
    this._owner = owner;
    console.log(`the owner setter function called ${owner.name}`);
  }
get owner () {
  return this._owner;
}





  speak() {console.log(this.sound);}
  callOwner() {
    console.log(this.owner.phone);
  }

}
class Owner {
  constructor (name, plotNo) {
    this.name = name;
    this.plotNo = plotNo;
  }
  set phone(phone) {
    this._phone = phone;
  }
  get phone() {
    return this._phone;
  }


}
var ernie = new Pet('dog', 1, 'pug', 'woof');
// ernie.speak();
ernie.owner = new Owner('Ashley', 9);
ernie.owner.phone = 98745631;
// console.log(ernie.owner);
// console.log(ernie.activity);
ernie.callOwner();
