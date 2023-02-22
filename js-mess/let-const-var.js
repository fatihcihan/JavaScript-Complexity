// VAR - LET - CONST

// VAR -> functional or global scope 
// LET -> block scope
// CONST -> block scope like let but immutable

// let age;
// console.log(age);

// age = 40;
// console.log(age);

// // const -> when we create a const value, we have to initialize it or it will give an error.
// // const -> const cannot be changed later (for now :))

// const name = "Fatih";
// console.log(name);

/*
 * let str = "";
 * for (let i = 0; i < 10; i++) {
 *    str = str.concat(i);
 *    console.log(str);
 *  }
 */


// const myArr = [1, 2, 3];
// console.log(myArr);
// myArr.pop();
// console.log(myArr);     // output -> [1, 2]

// const student = {
//     name: "Fatih",
//     age: 20,
// }

// console.log(student);       // output -> name : 'Fatih'
// Object.freeze(student)
// student.name = "Cihan"
// console.log(student);       // output -> name : 'Cihan'

// Object doesn't change even though I change student name (thanks to the freeze method)

// VAR -> functional or global scope 

// var x = 1;
// console.log(x);
// if (x == 1) {
//     var x = 10;
//     console.log(x);
// }
// console.log(x);

// let -> block scope

// let y = 1;
// console.log(y);
// if (y == 1) {
//     let y = 10;
//     console.log(y);
// }
// console.log(y);


// var x = 10;
// let y = 20;
// console.log(window.x);       // 10
// console.log(window.y);       // undefined


// HOISTING

// there is a case like x is predefined (only for var)

// console.log(x);     // undefined
// var x = 10;
// console.log(x);     // 10
