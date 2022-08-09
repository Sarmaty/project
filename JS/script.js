"use strict";

// alert('Hello');

// const result = confirm("Are you here?");
// console. log(result);

// const answer = +prompt('Are you 18 old', '18');
// console. log(answer + 5);

// const arr = ['a', 'b', 'c'];

// arr[10] = '3456'

// console. log(arr);


// const b = 'b';

// const arrObj = {
//     a: 'a',
//     '1': 'b',
//     2: 'c',
//     abc: {
//         def: {

//         }
//     }
// };

// //arrObj.b = '1234';
// arrObj['b'] = '1234';

// console. log(arrObj['b']);
// console. log(arrObj.b);





// const storeName = 'Avalon';
// const storeDescription = {
//     budget: 10000,
//     employees: ['Den','Ben','Ted'],
//     products: {
//         'ball': 12,
//         'dolly': 15
//     },
//     open: true

// };

// console. log(storeDescription);

// const result = confirm('Are you here');
// console. log(result);



// const answers = [];

// answers [0] = prompt('What your name?');
// answers [1] = prompt('What your lastname?');
// answers [2] = prompt('How old are you?');

// console. log(typeof(answers));


// const category = 'toys';

// console. log(`https://someurl.com/${category}/5`);

// const user = "Ivan"

// alert(`Hello, ${user}`);


//                                             // Lesson 15



// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console. log(++incr);
// console. log(--decr);

// console. log(2+2*2 !== "6");

// const isChecked = true,
//       isClose = true;  

// console. log(isChecked && isClose);

const  numberOfFilms = +prompt('How many movies do you was watch?','');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const  a = prompt('One of the last movies You watched',''),
       b = prompt('How much would you rate it',''),
       c = prompt('One of the last movies You watched',''),
       d = prompt('How much would you rate it','');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console. log(personalMovieDB);