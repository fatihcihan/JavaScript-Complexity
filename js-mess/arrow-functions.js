// Arrow Function

// Function Delaration

// function square(num) {
//     return num * num;
// }

// console.log(square(5));

// Function Expression

// const square2 = function (num) {
//     return num * num
// }

// console.log(square2(6));

// Arrow Function Expression 

// const square3 = function (num) { return num * num };
// const square3 = (num) => { return num * num };
// const square3 = num => (num * num);
// console.log(square3(8));


// window.name = 'fatih';

// function tellName() {
//     console.log(this);
//     console.log(this.name);
// }

// tellName();

// const person = {
//     name: 'okan',
//     tellName: function () {
//         console.log(this);
//         console.log(this.name);
//     }
// }

// person.tellName();


// window.name = 'fatih';

// const tellName = () => {
//     console.log(this);
//     console.log(this.name);
// }

// tellName();


// const person = {
//     name: 'okan',
//     tellName: () => {
//         console.log(this);
//         console.log(this.name);
//     }
// }

// person.tellName();

// The arrow function does not have a this keyword of its own, it points to the global

// window.name = 'onur';

// const person = {
//     name: 'fatih',
//     tellName: function () {
//         console.log(this);
//         console.log(this.name);

//         setTimeout(function () {
//             console.log(this);
//             console.log(this.name);
//         }, 2000)
//     }
// }
// person.tellName();


// window.name = 'onur';

// const person = {
//     name: 'fatih',
//     tellName: function () {
//         console.log(this);
//         console.log(this.name);

//         setTimeout(() => {
//             console.log(this);
//             console.log(this.name);
//         }, 2000)
//     }
// }
// person.tellName();

// function Person(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.fullName = function () {
//         return this.name + " " + this.surname;
//     }
// }

// const fatih = new Person("Fatih", "Cihan", 30);
// console.log(fatih);


// window.year = 1993;
// const myObj = {
//     year: 2023,
//     showYear1: function () {
//         console.log(this.year, this);
//     },
//     showYear2: () => console.log(this.year, this)
// }

// myObj.showYear1();          // 2023, myObj
// myObj.showYear2();          // 1993, window 

// Call

window.name = "onur";
window.grade = 100;

const student = {
    examResult: function () {
        return this.name + " - " + this.grade;
    }
}

const student1 = {
    name: 'fatih',
    grade: 80
}

const student2 = {
    name: 'okan',
    grade: 99
}

console.log(student.examResult.call(student1));
console.log(student.examResult.call(student2));