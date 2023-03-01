// Promise

// const promise1 = new Promise(function (resolve, reject) {
//     resolve('data');
//     resolve('data 2')
//     reject('error')
//     reject('error 2')
// });

// console.log(promise1);

// pending (undefined) / fulfilled / rejected   -> Promise state

// const promise1 = new Promise(function (resolve, reject) {
//     // resolve('data');
//     reject('error');
// });

// console.log(promise1);

// promise1.then(function (value) {
//     console.log(value);
// })


// promise1.then(value => console.log(value));
// promise1.catch(reason => console.log(reason));


// const promise1 = new Promise((resolve, reject) => {
//     // reject();
//     resolve();
// });

// promise1.then(() => {
//     console.log("data received");
// });

// promise1.catch(() => {
//     console.log("data not received");
// });

// promise1
//     .then(() => {
//         console.log("data received");
//     })
//     .catch(() => {
//         console.log("data not received");
//     })
//     .finally(() => {        // in any case the result is returned
//         console.log("work slave");
//     })


// const promise1 = new Promise((resolve, reject) => {
//     // resolve();
//     reject();
// });

// promise1.then(() => {
//     console.log("data received");
// },
//     () => {
//         console.log("data not received");
//     }
// );


// const books = [
//     { name: "Pinball 1973", author: "Haruki Murakami" },
//     { name: "Freedom", author: "Zyhmunt Bauman" },
//     { name: "Modernization in Turkiye", author: "Niyazi Berkes" },
// ]

// const listBooks = () => {
//     books.map((book, index) => {
//         console.log(book, index);
//     })
// }

// const addNewBook = (newBook, callback) => {
//     books.push(newBook);
//     callback();
// }

// const addNewBook = (newBook) => {
//     const promise1 = new Promise((resolve, reject) => {
//         books.push(newBook)
//         // resolve(books);
//         reject('error');
//     });
//     return promise1;
// }

// addNewBook({ name: "Show Society", author: "Guy Deboard" }, listBooks);

// addNewBook({ name: "Show Society", author: "Guy Deboard" })
//     .then(() => {
//         console.log('new list');
//         listBooks();
//     })
//     .catch((reason) => {
//         console.log(reason);
//     })

const addTwoNumbers = (number1, number2) => {
    const promise2 = new Promise((resolve, reject) => {
        const sum = number1 + number2;
        (typeof num1 !== 'number' && typeof number2 !== 'number')
            ? reject('You must enter 2 numbers')
            : resolve(sum)
    })
    return promise2
}


addTwoNumbers(4, 12)
    .then((value) => {
        console.log('total:', value);
    })
    .catch((reason) => {
        console.log('error:', reason);
    })