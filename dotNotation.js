
// charAt() method returns the character at a specified index (position) in a String.
// let a_variable = "All Around the world"

// console.log(a_variable.charAt(-1).toUpperCase());



// Index of first character is 0, second 1..
// Index of the last character is string length -1

// console.log("abc".slice(-1));




// RANDOM NUMBER GENERATOR
// var n = Math.random();       0-0.9999999999999999
// n = Math.floor(n);           Numbers between 0-5
//          so to change this 0-5 to 6 you would have to add +1 e.g.:
// n = Math.floor(n) +1;

// n = Math.floor(n);           change from decimal to round number:
//                               .floor() rounds it down to nearest whole number
//                               .ceil() rounds it up to nearest whole number
//                               .round() rounds to nearest integer
                                 

// e.g. 
// var n = Math.random()*100;     random number between 1 and 100
// FLOOR example: let randomNumber =(Math.floor(Math.random() * 51))  -----> random number 0 - 50

// console.log(n);


// other dot notations
// .includes


// DAY 1
// challenge 1


// challenge 2
// let symbol_vert = ["   |   |   "]

// let symbol_hor = ["-----------"]

// console.log(symbol_vert)
// console.log(symbol_vert)
// console.log(symbol_vert)
// console.log(symbol_hor)
// console.log(symbol_vert)
// console.log(symbol_vert)
// console.log(symbol_vert)
// console.log(symbol_hor)


// CHALLENGE 3

// (new line in string)
// console.log(`My name is Donna
// I am 28 years old
// My star sign is cancer in sun`);

// using \n
// console.log("My name is Donna\nI am 28 years old\nMy star sign is cancer in sun");



// challenge 4; show another string method and number method (useful for example when showing only parts of someones email address and keeping other information hidden)

// let turtlename = 'donnatello'

// // Displays 'd'
// console.log(turtlename.substring(0, 1))
// console.log(turtlename.substring(1, 0))

// // Displays 'donn'
// console.log(turtlename.substring(0, 4))

// // Displays everything after donn, so "atello"
// console.log(turtlename.substring(4))

// // Displays everything between 4th and 7th character: d(0) o(1) n(2) n(3) a(4) t(5) e(6) l(7)  so : ate
// console.log(turtlename.substring(4, 7))
// console.log(turtlename.substring(7, 4))



// console.log("________________________________________________________________")


// toFixed()   returns a string, with the number written with a specified number of decimals:
// Warning: Floating point numbers cannot represent all decimals precisely in binary. This can lead to unexpected results, such as 0.1 + 0.2 === 0.3 returning false .

// function financial(x) {
//     return Number.parseFloat(x).toFixed(3);
//   }

  // create total of 4 decimals, change number to 4 and it adds 0 after 6
//   console.log(financial(123.456));

  // e+5 adds 5 decimals
//   console.log(financial(123.456e+5));

