// ASIGNMENT OPERATORS

// let i = 10;


// i = i + 2;
// i = 12

// better:
// i += 2;

// console.log(i);

// let favouriteDrink = "coffee";

// console.log(favouriteDrink);
// console.log("My favourite drink is " + favouriteDrink);

// but the plus symbol can get very messy when using big string. Soluion: 
// BACK TICK ! Use dollar sign and curly brackets with variables in it. 

// console.log(`My name is ${variable}`)

// e.g

// let name = 'Chris';
// let age = 27;
// let favDrink = 'Coffee'

// console.log(`Hi my name is ${name}. I am ${age} and my favourite drink is ${favDrink}. `)

// doing an update doesnt need writing let again, only first time when declaring variable
// use template literals $ to inject variables in strings easier:
// favDrink = 'red wine'
// name = 'Donna'
// age = 28;

// console.log(`Hi my name is ${name}. I am ${age} and my favourite drink is ${favDrink}. `)








// Activity 1
// let someonesName = "Ash"
// let someonesAge = 54
// let favouriteColor = "Real gold"

// console.log(`Hey my name is ${someonesName} and have been ${someonesAge} years on this planet as far as I'm aware.
// And my favourite colour? ${favouriteColor}.. I'd say`)

// someonesName = "Yasmin"
// someonesAge = 10
// favouriteColor = "orange"

// console.log(`And that little girl over there is called ${someonesName}.. She must be around ${someonesAge} years old now.. 
// What's your favourite color ${someonesName}? She replies: "${favouriteColor}" sir!`)


// Activity 2

// let breakfast = "toast with butter and pate"
// let lunch = "cucumber soup"
// let dinner = "I haven't decided yet"


// console.log(`I get confused when people say dinner for lunch and lunch for dinner. So you guess which one is which. 
// For breakfast I had ${breakfast}.
// For lunch I'm planning to make ${lunch} and for dinner ${dinner}.`)


// breakfast = "the same as yesterday"
// lunch = "leftover cucumber soup"
// dinner = "no clue yet"

// console.log(`Then tomorrow for breakfast I'll likely have ${breakfast}.. 
// For lunch probably some ${lunch}. And dinner? I got ${dinner}.`)




// ACTIVITY 3 

// To set two dates to two variables. We have to use the Date Object.
const birthDay = new Date("2000,12,03")
const todaysDate = new Date("2021, 11, 22");
// This calculates the difference but IN milliseconds.
let diffInTime = todaysDate.getTime() - birthDay.getTime ()


// To convert that to days we use this calculation.
let diffInDays = diffInTime / (1000 * 3600 * 24);
let years = diffInDays /365
console.log(Math.floor(years))
// // Finally, it is console logged out here using string template literals. 
console.log(`The difference between ${todaysDate} and ${birthDay} is ${diffInDays} days.`);





// // this example takes 2 seconds to run
// const start = Date.now();

// console.log('starting timer...');
// // expected output: starting timer...

// setTimeout(() => {
//   const millis = Date.now() - start;

//   console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
//   // expected output: seconds elapsed = 2
// }, 2000);

// console.log(Date())

// let birthday_calculator = Date.now()










// ACTIVITY 4

// let space1= " x"
// let space2= " o"
// let space3= "  "
// let space4= " x"
// let space5= " x"
// let space6= "  "
// let space7= " o"
// let space8= "  "
// let space9= "  "




// console.log(`${space3}     | ${space3}  | ${space3}   
// ${space1}     | ${space2}  | ${space3}   
// ${space3}     | ${space3}  | ${space3}   
//  - - - - - - - - - - 
// ${space3}     | ${space3}  | ${space3}   
// ${space4}     | ${space5}  | ${space6}   
// ${space3}     | ${space3}  | ${space3}   
//  - - - - - - - - - - 
// ${space3}     | ${space3}  | ${space3}   
// ${space7}     | ${space8}  | ${space9}   
// ${space3}     | ${space3}  | ${space3}   
// `)








