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
  console.log(firstPerson);
  
  // Coding Challenge One
  
  /* 
  1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
  2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
  3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
  4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
  DATA CAR 1: 'BMW' going at 120 km/h
  DATA CAR 2: 'Mercedes' going at 95 km/h
  GOOD LUCK 😀
  */
  
  const Car = function (make,speed) {
      this.carName = make,
      this.carSpeed = speed
  };
  let car1 = new Car('BMW',120);
  let car2 = new Car('Mercedes',95);
  Car.prototype.accelerate = function(){
      this.carSpeed += 10;
      console.log(this.carSpeed+'km/h');
  }
  Car.prototype.brake = function(){
      this.carSpeed -= 5
      console.log(this.carSpeed+'km/h');
  }
  car1.accelerate()
  car2.accelerate()
  car2.brake()
  car1.brake()
  // const Car = function (make, speed) {
  //     this.make = make;
  //     this.speed = speed;
  //   };
  //   Car.prototype.accelerate = function () {
  //     this.speed += 10;
  //     console.log(`${this.make} is going at ${this.speed} km/h`);
  //   };
  //   Car.prototype.brake = function () {
  //     this.speed -= 5;
  //     console.log(`${this.make} is going at ${this.speed} km/h`);
  //   };
  //   const bmw = new Car('BMW', 120);
  //   const mercedes = new Car('Mercedes', 95);
  //   bmw.accelerate();
  //   bmw.accelerate();
  //   bmw.brake();
  //   bmw.accelerate();
  
  // Now we will learn about ES6 CLasses
  
  // class declaration
  
  class Person2 {
      constructor(firstN,birthY){
          this.firstName = firstN,
          this.birthYear = birthY;
      }
      age(){
          console.log(2037-this.birthYear);
      }
  }
    
  let namingPerson1 = new Person2('Ali',1999);
  console.log(namingPerson1)
  namingPerson1.age();
  
  // By Earlier Method we make it as
  Person2.prototype.ageToday = function(){
      console.log(2022 - this.birthYear);
  }
  namingPerson1.ageToday();

  

//   Static Method with old way

let PersonOld = function(name,year){
    this.bname = name;
    this.byear = year;
}

let PersonSelf = new PersonOld('Ali', 1999);
console.log(PersonSelf);
PersonOld.prototype.calAge = function(){
    console.log(2022-this.byear )
}
// static method it will go in construtor not in prototype
PersonOld.hey = 'hello';
PersonOld.hey;
PersonSelf.calAge();

// Static Method with new ways

class PersonNew { 
    constructor(name,age){
        this.myname = name;
        this.myage = age;
    }
    calAge(){
        console.log(2022-this.myage);
        console.log(this);

        
    }
    static ageBy() {
        console.log(2037-this.myage);
        console.log(this);
    }
}
let PersonNewSelf = new PersonNew('Ali',1999);
console.log(PersonNewSelf);
PersonNewSelf.calAge();
PersonNew.ageBy();


// Object Craeat method 
//  This doenst include protoype or constructor function but give result

let objCre = {
    init (name,age){
      this.Aname = name;
      this.Aage = age;
    }
}

let creatingObj = Object.create(objCre);
creatingObj.init('ALi',2);
console.log(creatingObj)
