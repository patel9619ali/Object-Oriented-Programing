// Constructor Function

let Person = function(firstN,lastN,age){
  this.firstName = firstN;
  this.lastName = lastN;    
  this.birthYear = age;    
}

let firstPerson = new Person('Ali', 'Kaif',1999);

console.log(firstPerson instanceof Person);

// Prototype
Person.prototype.calAge = function(){
    console.log(2037-this.birthYear);
}
console.log(firstPerson.calAge());  

Person.prototype.hobbies = 'Playing Football';

// console.log(firstPerson.hobbies)
console.log(firstPerson)
