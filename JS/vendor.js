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


/* 
  1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
  2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
  3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
  4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
  DATA CAR 1: 'BMW' going at 120 km/h
  DATA CAR 2: 'Mercedes' going at 95 km/h
  GOOD LUCK 😀
  */
  
//  Using ES6 Classes

class CarsSpeed {
    constructor(carName , carSpeed){
        this.car = carName;
        this.speed = carSpeed;
    }
    accelerate(){
        this.speed += 5;
        console.log(this.speed)
    }
    brake(){
        this.speed -= 5;
        console.log(this.speed)
    }
}

let carNew = new CarsSpeed('BMW', 30);
console.log(carNew);
carNew.accelerate();
carNew.brake();
carNew.brake();
carNew.brake();
carNew.brake();
carNew.brake();

// Inheritance Using Constructor

let Student = function(userName,password){
     this.userName = userName;
     this.password = password;
}
Student.prototype.emailAddress = function(emailAddress){
    console.log(`${this.userName} Email address is ${emailAddress}`);
}

let studentPanel = new Student('Ali',12332);
console.log(studentPanel);
studentPanel.emailAddress('ali@terbiumsolutions.com');

let Admin = function(userName,password,deleteId){
    Student.call(this,userName,password);
    this.idDelete = deleteId;
}
Admin.prototype = Object.create(Student.prototype);
Admin.prototype.delete = function(){
    console.log(`${this.userName} has been Deleted`);
}
let adminPanel = new Admin('Ishaq',42343,'Ali');
console.log(adminPanel);
adminPanel.emailAddress('ali@ter.com');
adminPanel.delete();

// let carPet = function(make,speed){
//    this.carName = make;
//    this.carSpeed = speed;
// }
// carPet.prototype.accelerate = function(){
//       this.carSpeed += 5;
//       console.log(`${this.carName} has Speed of ${this.carSpeed} Km/hr`) 
// }
// carPet.prototype.brake = function(){
//       this.carSpeed += 5;
//       console.log(`${this.carName} has Speed of ${this.carSpeed} Km/hr`) 
// }

// let carPetNew = new carPet('Tesla',23)

// console.log(carPetNew);

// for (let index = 0; index < 5; index++) {
//     if(index <= 5){
//       carPetNew.accelerate();
//     }
// }

// let carEv = function(make,speed,charge){
//      carPet.call(this,make,speed);
//      this.carCharge = charge;
// }

// carEv.prototype = Object.create(carPet.prototype);

// let carEvNew = new carEv('Tesla',120,23);
// console.log(carEvNew);
// carEv.prototype.accelerate = function(){
//     this.carSpeed += 20;
//     this.carCharge -= 1;
//     console.log(`${this.carName} going on a Speed of ${this.carSpeed} Km/hr has a Battery rate of ${this.carCharge}%`) 
// }

// carEvNew.accelerate();


// Inheritance Using Es6 Class

class carPet{
    constructor(make,speed){
    this.carName = make;
    this.carSpeed = speed;
 }
 accelerate(){
    this.carSpeed += 5;
    console.log(`${this.carName} has Speed of ${this.carSpeed} Km/hr`)
 }
 brake(){
    this.carSpeed -= 5;
    console.log(`${this.carName} has Speed of ${this.carSpeed} Km/hr`)
 }
}
 
 let carPetNew = new carPet('Tesla',23);
 
 console.log(carPetNew);
 
 for (let index = 0; index < 5; index++) {
     if(index <= 5){
       carPetNew.accelerate();
     }
 }
 
 class carEv extends carPet {
   constructor(make,speed,charge){
    // this should be written first which property same of car if no new property then no need to have super as well as constructor function
    super(make,speed)
    this.carCharge = charge;
   }
   accelerate(){
    this.carSpeed += 20;
    this.carCharge -= 1;
    console.log(`${this.carName} going on a Speed of ${this.carSpeed} Km/hr has a Battery rate of ${this.carCharge}%`) 
 }
 } 
 let carEvNew = new carEv('Tesla',120,23);
 console.log(carEvNew);
 
 carEvNew.accelerate();

//  Another class example
//  class bankListApp {
//     constructor(name,currency,pin){
//         this.ownerName = name,
//         this.ownerCurrency = currency,
//         this.ownerPin = pin,
//         this.movements = [],
//         this.language = navigator.language;
//         console.log(`Welcome ${this.ownerName} to Our Bank`)
//     }
//     // Public Interface
//     deposite(val){
//         this.movements.push(val);
//     }
//     withdrawl(val){
//         this.deposite(-val);
//     }
//  }
 
//  let bankApp = new bankListApp('Ali' , 'RUP' , 1971);
//  bankApp.deposite(200);
//  bankApp.withdrawl(200);
//  bankApp.deposite(203240);
//  bankApp.withdrawl(4400);
//  console.log(bankApp);

//  Data Encapsulation

// it maens to make your data private so that it can be used out side 
// There are four type of encapsulation in js
// Public Field
// Private FIeld
// Public mathod 
// Private mathod 

// Public field means heiding your data just by giving _ as a prifix so when you acces it from out side you can know that it is a field which is public but cant be touch

// Private field means making your data truly  private so you can acces it from outside it is done by using "#" symbol as a prefix

// 1 Public example
// Here we have used it with _ as a prefix so we know it should not be altered
// class bankListApp {
//     _movements = [];
//     _language = navigator.language;
//     constructor(name,currency,pin){
//         this.ownerName = name,
//         this.ownerCurrency = currency,
//         this.ownerPin = pin,
//         console.log(`Welcome ${this.ownerName} to Our Bank`)
//     }
//     // Public Interface
//     deposite(val){
//         this._movements.push(val);
//     }
//     withdrawl(val){
//         this.deposite(-val);
//     }
//  }
 
//  let bankApp = new bankListApp('Ali' , 'RUP' , 1971);
//  bankApp.deposite(200);
//  bankApp.withdrawl(200);
//  bankApp.deposite(203240);
//  bankApp.withdrawl(4400);
//  console.log(bankApp);


// 2 Private Field
class bankListApp {
    _language = navigator.language;
    #movements = [];
    #ownerPin;
    constructor(name,currency,pin){
        this.ownerName = name,
        this.ownerCurrency = currency,
        this.#ownerPin = pin,
        console.log(`Welcome ${this.ownerName} to Our Bank`)
    }
    getMovement(){
        return this.#movements;
    }
    // Public Interface
    deposite(val){
        this.#movements.push(val);
    }
    withdrawl(val){
        this.deposite(-val);
    }
    #approveLoan(){
        return true;
    }
    loan(val){
        if(this.#approveLoan(val)){
            this.deposite(val);
        }
    }
 }
 
 let bankApp = new bankListApp('Ali' , 'RUP' , 1971);
 bankApp.deposite(200);
 bankApp.withdrawl(200);
 bankApp.deposite(203240);
 bankApp.withdrawl(4400);
 console.log(bankApp.getMovement());
 console.log(bankApp.loan(3000));
//  Private Method is same as that of private field using #syntex as a prefix
//  console.log(bankApp.#approveLoan(3000));
//  bankApp.#movements;
//  Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class (at vendor.js:399:9) Error Name
//  Here if we want to get the class of movement or akter the movement class we cant do it so it will trow as an error
 console.log(bankApp);