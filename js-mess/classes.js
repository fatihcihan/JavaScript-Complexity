// JavaScript Classes

// Constructor function
// function Person(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     // this.fullName = fullName;        
// }

// function fullName() {
//     return this.name + " " + this.surname;
// }

// Person.prototype.fullName = function () {
//     return this.name + " " + this.surname;
// }

// The features taken from the prototype are the same

// Person.prototype.friends = ['Onur', 'Ekrem'];

// const fatih = new Person("Fatih", "Cihan", 30);
// const okan = new Person('Okan', 'Bozok', 40);
// console.log(fatih);
// console.log(okan);
// console.log(fatih.fullName());
// console.log(okan.fullName());

// console.log(fatih.friends);
// console.log(okan.friends);

// fatih.friends.push('Cinar');

// console.log(fatih.friends);     // ['Onur', 'Ekrem', 'Cinar']
// console.log(okan.friends);      // ['Onur', 'Ekrem', 'Cinar']


// function Person(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.fullName = fullName;
// }

// Class Declaration

// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.friends = ['Onur', 'Ekrem'];
//     }

//     fullName() {
//         return this.name + " " + this.surname;
//     }
// }

// Class Expression

const Person = class {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ['Onur', 'Ekrem'];
    }

    fullName() {
        return this.name + " " + this.surname;
    }
}

const fatih = new Person('Fatih', 'Cihan', 30)
const okan = new Person('Okan', 'Bozok', 40)

console.log(fatih);
console.log(okan);
console.log(fatih.fullName());
console.log(okan.fullName());

console.log(fatih.friends);      // ['Onur', 'Ekrem', 'Cinar']
console.log(okan.friends);       // ['Onur', 'Ekrem', 'Cinar']

fatih.friends.push('Cinar');

console.log(fatih.friends);      // ['Onur', 'Ekrem', 'Cinar']
console.log(okan.friends);       // ['Onur', 'Ekrem']

console.log(typeof Person);