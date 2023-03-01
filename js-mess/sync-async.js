// JavaScript Single Thread
// JavaScript Synchronous

// const func1 = () => {
//     console.log("Func 1 console log 1");
//     console.log("Func 1 console log 2");
//     alert('Alert message');
// }

// const func2 = () => {
//     console.log("Func 2 console log 1");
//     console.log("Func 2 console log 2");
// }

// func1();
// func2();

// let x = 10;
// console.log("first data", x);       // first data 10

// setTimeout(() => {
//     x = x + 5;
// }, 2000);
// console.log("second data", x);      // second data 10 ???

// x = x + 5;
// console.log("third data", x);       // third data 15 ???

// Call Stack -> shows the order of operation of functions

// function func1() {
//     console.log("first");
//     func2();
//     console.log("again first");
// }

// function func2() {
//     console.log("second");
//     func3();
//     console.log("again second");
// }

// function func3() {
//     console.log("third");
// }

// func1();

// function add(x, y) {
//     return x + y;
// };

// function average(x, y) {
//     return add(x, y) / 2;
// }

// let x = average(6, 8);


// function task(message) {
//     let n = 10000000000;
//     while (n > 0) {
//         n--;
//     }
//     console.log(message);
// }

// console.log('1');

// setTimeout(() => {
//     console.log('2');
// }, 1000)

// console.log('3');
// console.log('4');

// task('process completed');

// setTimeout(() => {
//     console.log('5');
// }, 2000)

// task('process completed 2');

// Call back

// const myName = () => {
//     console.log("my name is fatih");
// }

// setTimeout(myName, 3000);

// setTimeout(() => {
//     console.log("my name is fatih");
// }, 3000);

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     let pElem = document.createElement('p');
//     pElem.textContent = 'This is a newly-added paragraph';
//     document.body.appendChild(pElem);
// });
// let h1Elem = document.createElement('h1');
// h1Elem.textContent = 'Header';
// document.body.appendChild(h1Elem);


const books = [
    { name: "Pinball 1973", author: "Haruki Murakami" },
    { name: "Freedom", author: "Zyhmunt Bauman" },
    { name: "Modernization in Turkiye", author: "Niyazi Berkes" },
]

const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index);
    })
}

const addNewBook = (newBook, callback) => {
    books.push(newBook);
    callback();
}

addNewBook({ name: "Show Society", author: "Guy Deboard" }, listBooks);
