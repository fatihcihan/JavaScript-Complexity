// Objects

// Object : An object consists of a collection of properties

// Property -- method : function related with an object

// const person = {
//     name: "Fatih",
//     surname: "Cihan",
//     age: 30,
//     languages: ['Turkish', "English", "Spanish"],
//     fullName: function () {
//         return this.name + " " + this.surname
//     },
//     address: {
//         city: "Aydin",
//         district: "Efeler"
//     }
// }


// Object Literal

// const person = {
//     name: 'Fatih',
//     surname: 'Cihan',
//     age: 30,
//     fullName: function () {
//         return this.name + " " + this.surname
//     }
// }

// console.log(person);

// // Dot notation
// console.log(person.name);
// console.log(person.fullName());

// person.job = "Student";

// console.log(person);
// console.log(person.job);

// // Bracket notation

// console.log(person['name']);
// console.log(person['fullName']());      


// const person = {
//     name: 'Fatih',
//     surname: 'Cihan',
//     age: 30,
//     fullName: function () {
//         return this.name + " " + this.surname
//     }
// }

// person.address = {

// };

// console.log(person);
// person.address.city = "Aydin";
// console.log(person);

// Constructor 

// function Person(name, surname, age) {
//     const obj = {}
//     obj.name = name;
//     obj.surname = surname;
//     obj.age = age;
//     obj.fullName = function () {
//         return this.name + " " + this.surname;
//     }
//     return obj;
// }

// function Person(name, surname, age) {
//     // this -> current object
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.fullName = function () {
//         return this.name + " " + this.surname;
//     }
// }

// const person1 = new Person("Fatih", "Cihan", 30);
// const person2 = new Person("X", "Y", 25);
// console.log(person1);
// console.log(person2);

// Object constructor

// const person1 = new Object();
// person1.name = "Fatih";
// person1.surname = "Cihan";
// person1.age = 30;
// person1.fullName = function () {
//     console.log(this);
//     return this.name + " " + this.surname;
// }

// console.log(person1);
// console.log(person1.age);
// console.log(person1.fullName());

// Creating an object with the Object.create() method 

const person = {
    name: "Fatih",
    surname: "Cihan",
    age: 30,
    fullName: function () {
        return this.name + " " + this.surname
    },
}

console.log(person);

const test = Object.create(person);
test.name = "test name";
test.surname = "test surname";
test.age = 5;

console.log(test);
console.log(test.fullName());  // test name test surname  -> because of the inheritance