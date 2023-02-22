// FUNCTIONS

// 1) Function Declaration / Statement

// console.log(square(3));     // 9    

// function square(number) {   // number -> parameter
//     return (number * number);
// }

// square(6);   6 -> arguman
// console.log(square(6));

// console.log(square(4));     //  () -> invoke

// Function declaration -> works as hoisted


// 2) Function Expression
// If a function is assigned to a variable, it's called function expression 

// Function name is optional (Anonymous function can also be)

// const square = function square(number) {
//     return (number * number);
// }

// console.log(square);
// console.log(square(2));

// First - class functions
// When a function is assigned to a variable, I can treat it like variable

// const myArr = [7, "Fatih", function () { console.log('Array element'); }];

// myArr[2]();

// const myObj = {
//     age: 30,
//     name: 'Fatih',
//     func: function () { console.log('Object element'); }
// }

// myObj.func();

// console.log(20 + (function () { return 10; })());   // IIEF

// console.log();

// var square = function square(number) {
//     return (number * number);
// }

// Basically differences
// Function Expression is not hoisted.
// Function expression can be anonymous, but i have to give name in function declaration

// Benefits of First - class functions 
// **We can pass a function as an argument to another function

// const addFive = function (number, func) {
//     console.log(number + func());
// }

// addFive(10, function () { return 5; })

// const myFunc = function (num) {
//     return function toDouble() {
//         console.log(num * 2);
//     }
// }

// myFunc(5)();

// const result = myFunc(7);
// result();

// IIFE (Immediately Invocable Function Expression)

// (function () {
//     console.log(5 + 12);
// })();

// console.log(sum);  

// sum();
// console.log(sum);

function square(number1, number2) {
    return number1 * number2;
}

console.log(square.length);     // 2