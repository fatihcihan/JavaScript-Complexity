// Class Declaration

// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }
//     fullName() {
//         return this.name + " " + this.surname;
//     }

//     static showName = "Person";

//     static staticMethod(){
//         console.log("Static method works");
//     }
// }


// console.log(typeof Person);     // function

// const fatih = new Person("Fatih", "Cihan", 30);
// const onur = new Person("Onur", "Senelli", 40);

// console.log(fatih instanceof Person);       // true

// console.log(fatih);
// console.log(onur);

// console.log(fatih.fullName());
// console.log(onur.fullName());
// console.log(Person.fullName());      // Person.FullName is not a function
// console.log(fatih.showName);         // undefined
// console.log(fatih.staticMethod());   // fatih.staticMethod is not a function

// Static functions depend on classes and we cannot access these methods and properties through instance

// console.log(Person.showName);
// console.log(Person.staticMethod());

// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }
//     fullName() {
//         return this.name + " " + this.surname;
//     }
// }


// function Person(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.fullName = function () {
//         return this.name + " " + this.surname;
//     }
// }

// const fatih = new Person("Fatih", "Cihan", 30)
// class Engineer extends Person { };      // Engineer -> Subclass (Child)     Person -> Superclass (Parent)
// const ekrem = new Engineer("Ekrem", "Uysal", 20);
// console.log(ekrem);
// console.log(fatih);

// Object + name, surname, age... -> Person 
// Person -> Engineer

// console.log(fatih instanceof Person);     
// console.log(ekrem instanceof Engineer);
// console.log(ekrem instanceof Person);       // true, forwhy inheritance
// console.log(fatih instanceof Engineer);       // false


// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }
//     fullName() {
//         return this.name + " " + this.surname;
//     }
// }

// class Engineer extends Person {
//     constructor(name, surname, age, job) {
//         super(name, surname, age)     // Get these parameters from super class (Person)
//         this.job = job;
//     }

//     getMoney() {
//         console.log("earn money");
//     }
// };

// const fatih = new Person("Fatih", "Cihan", 30)
// const ekrem = new Engineer("Ekrem", "Uysal", 20, "Engineer");
// console.log(fatih);
// console.log(ekrem);


// // Object + name, surname, age... -> Person
// // Person + job, getMoney() -> Engineer

// console.log(ekrem.getMoney());

// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }
//     fullName() {
//         return this.name + " " + this.surname;
//     }
// }

// class Engineer extends Person {
//     constructor(name, surname, age, job) {
//         super(name, surname, age)     
//         this.job = job;
//     }

//     getMoney() {
//         console.log("earn money");
//     }
// };

// const ekrem = new Engineer("Ekrem", "Uysal", 20, "Engineer");


class ExtendedArray extends Array {
    shuffle() {
        this.sort(() => Math.random() - 0.5);
    }
}

let myArr = new ExtendedArray(1, 2, 3, 4, 5);

console.log(myArr instanceof ExtendedArray);
console.log(myArr instanceof Array);
console.log(myArr);
myArr.shuffle();
console.log(myArr);