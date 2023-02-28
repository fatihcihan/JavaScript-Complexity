// object.function() -> this object
// this -> global object -> window (global)

// console.log(this);
// console.log(this.location);
// console.log(this.location.href);
// console.log(window.location.href);
// console.log(this === window);   // true

// const name = "Ali";

// console.log(name);              // Ali
// console.log(this.name);         // Fatih     this -> global object (window)

// // Function Declaration

// function func1() {
//     this.name = "Fatih";
//     // console.log(this);
//     // console.log(this.location.href);
//     console.log(this.age);
// }

// // Function Expression

// const func2 = function () {
//     this.age = 30;
//     // console.log(this);
//     // console.log(this.location.href);
//     console.log(name);
// }

// Since an object has no method, it references the window object.
// func1();
// func2();

// console.log(name);
// console.log(age);
// console.log(this.name);
// console.log(this.age);


// Object.function() -> this object

// function Person(name, surname, age) {
//     const obj = {};
//     obj.name = name;
//     console.log(obj);
//     obj.surname = surname;
//     obj.age = age;
//     obj.fullName = function () {
//         return obj.name + " " + obj.surname;
//     }
//     return obj;
// }


// function Person(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.fullName = function () {
//         return this.name + " " + this.surname;
//     }
// }


// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }
//     fullName = function () {
//         return this.name + " " + this.surname;
//     }
// }


// const fatih = new Person("Fatih", "Cihan", 30);
// const onur = new Person("Onur", "Senelli", 40);
// console.log(fatih);
// console.log(onur);


// const fatih = {
//     name: "Fatih",
//     surname: "Cihan",
//     age: 30,
//     fullName: function () {
//         console.log(this);
//         // return this.name + " " + this.surname;
//     },
//     friend: {
//         name: "Onur",
//         fullName: function () {
//             console.log(this);
//             // return this.name + " " + this.surname;
//         }
//     }
// }


// console.log(fatih.fullName());           // this -> referencing the fatih
// console.log(fatih.friend.fullName());    // this -> referencing the onur


// const fatih = {
//     name: "Fatih",
//     func: function () {
//         console.log(this === fatih);
//         console.log(this === window);
//     }
// }

// // console.log(fatih.func());      // true

// const func2 = fatih.func;
// console.log(func2());

const fatih = {
    name: "Fatih",
    func: function () {
        console.log(this === fatih);
        setTimeout(function () {
            console.log(this === fatih);
            console.log(this === window);
        }, 2000);
    }
}

console.log(fatih.func());




