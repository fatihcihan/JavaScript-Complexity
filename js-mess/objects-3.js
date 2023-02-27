// New Object Syntax

// 1) Shorthand Properties

// let name = 'fatih', age = 30;

// const myObj = {
//     name: name,
//     age: age
// };

// If key - value is the same we can do it like this

// const myObj = {
//     name,
//     age
// };

// console.log(myObj.name);
// console.log(myObj.age);

// 2) Computed Property Names

// let prop1 = 'name';
// let myObj = {};
// myObj[prop1] = 'Fatih';
// console.log(myObj);

// ES6 (This feature is usually used for ready-made libraries.)

// let prop1 = 'name';
// let myObj = {
//     [prop1]: 'Fatih'
// }
// console.log(myObj);

// 3) Short Method Syntax

// const person = {
//     name: "Fatih",
//     surname: "Cihan",
//     age: 30,
//     fullName() {
//         return this.name + " " + this.surname
//     }
// }

// console.log(person);

// 4) Object Destructuring

// const person = {
//     name: "Fatih",
//     surname: "Cihan",
//     age: 30,
//     fullName() {
//         return this.name + " " + this.surname
//     }
// }

// let myVar1 = person.name;
// console.log(myVar1);

// let myVar2 = person.age;
// console.log(myVar2);

// let { name: myVar1, age: myVar2 } = person;
// console.log(myVar1);
// console.log(myVar2);

// let { name: name, age: age } = person;
// console.log(name);
// console.log(age);

// let { name, age } = person;
// console.log(name);
// console.log(age);

// const books = [
//     {
//         title: 'Kirmizi Pazartesi',
//         author: 'Haruki Murakami',
//         pageNum: 296,
//         topic: '1968-1970 yillari arasinda gecen olaylar...'
//     },
//     {
//         title: 'Seker Portakali',
//         author: 'Jose Muro de Vasconselos',
//         pageNum: 200,
//         topic: 'Irlandali yazar Bram Stoker eseri...'
//     },
//     {
//         title: 'En Uzun Yuzıil',
//         author: 'Ilber Ortayli',
//         pageNum: 180,
//         topic: '1968-1970 yillari arasinda gecen olaylar...'
//     },
//     {
//         title: 'Dracula',
//         author: 'Bram Stoker',
//         pageNum: 250,
//         topic: 'Irade gucu ve catisma...'
//     }
// ]

// I only want to get title and author information

// for (const { title, author } of books) {
//     console.log(title + ' - ' + author);
// }

// 5) Spread Operator in Object Literals (...)

// const person = {
//     name: "Fatih",
//     surname: "Cihan",
//     age: 30,
//     fullName() {
//         return this.name + " " + this.surname
//     }
// }

// let person2 = { ...person }; // We have copied the person object to the person2 object
// console.log(person2);

// const myObj1 = {
//     name: 'fatih',
//     age: 30
// }

// const myObj2 = {
//     job: 'student',
//     gender: 'male'
// }

// const fatih = { ...myObj1, school: 'Ataturk', ...myObj2 };   // we created a new object from existing object
// console.log(fatih);

// 6) REST Operator in Object Literals

// const person = {
//     name: "Fatih",
//     surname: "Cihan",
//     age: 30,
//     fullName() {
//         return this.name + " " + this.surname
//     }
// }

// const { name, surnmae, age } = person;
// console.log(name);

// const { name, ...rest } = person
// console.log(name);
// console.log(rest);

// 7) Object Values - Object Entries

const person = {
    name: "Fatih",
    surname: "Cihan",
    age: 30,
    fullName() {
        return this.name + " " + this.surname
    }
}

console.log(Object.keys(person));       // ES5
console.log(Object.values(person));     // ES6  
console.log(Object.entries(person));     // key-value  
