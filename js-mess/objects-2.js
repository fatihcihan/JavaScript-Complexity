
// Objects 2

// const person = {
//     name: 'Fatih',
//     surname: 'Cihan',
//     age: 30,
//     fullName: function () {
//         return this.name + " " + this.surname
//     }
// }

// console.log(person);
// console.log(person.fullName());
// console.log(person.fullName2());
// console.log(person.job);
// console.log(person.toString());
// console.log(person.hasOwnProperty('name'));

// Object + name, surname, age, fullName() -> person 

// const myObj = {};
// console.log(myObj);     // prototype -> object
// console.log(myObj.toString());

// Object -> myObj

// function Person(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.fullName = function () {
//         return this.name + " " + this.surname;
//     }
// }

// const fatih = new Person('Fatih', 'Cihan', 30);
// console.log(fatih);

// Object + name, surname, age, fullName() -> Person -> fatih

// console.log(fatih.toString());
// console.log(fatih.__proto__);

// const test = new Person('test name', 'test surname', 25);
// console.log(test);
// test.job = 'test job';
// console.log(test);
// console.log(test.toString());

// Object + name, surname, age, fullName() -> Person + job -> test

// test.toString = function () {
//     return "testtttt";
// }

// console.log(test.toString());

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.fullName = function () {
//     return this.name + " " + this.surname;
// };

// Person.prototype.surname = "Cihan";

// const test = new Person('test-name', 25);
// const fatih = new Person('Fatih', 30);

// console.log(test);
// console.log(fatih);


// Inheritance

const person = {
    name: 'XXXX',
    surname: 'YYYY',
    age: 0,
    fullName: function () {
        return this.name + " " + this.surname
    }
}

const fatih = Object.create(person);
console.log(fatih);
console.log(fatih.name);
fatih.name = "Fatih";
console.log(fatih);
console.log(fatih.age);
fatih.age = 30;
console.log(fatih);

console.log(fatih.hasOwnProperty("surname"));   // false (not in the fatih object but in its prototype)
console.log(fatih.hasOwnProperty("name"));      // true

console.log("surname" in fatih);    // true
