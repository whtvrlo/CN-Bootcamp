// VARIABLES & OPERATORS

 // Activity 1
// let name = 'Chris';
// let age = 27;
// let favColor = 'Blue';
// console.log(Hi, my name is ${name}. I am ${age} and my favourite color is ${favColor});
// age = 28;
// favColor = 'Emerald';
// console.log(Hi, my name is ${name}. I am ${age} and my favourite color is ${favColor});




// Activity 2
// let breakfast = "Cereal";
// let lunch = "Soup";
// let dinner = "Pie";
// console.log(Today I have had ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner!);
// breakfast = "Fruit";
// lunch = "Omelette";
// dinner = "Sushi";
// console.log(Tomorrow I will be having ${breakfast} for breakfast, ${lunch} for lunch and my favourite ${dinner} for dinner! I can't wait!)

// // Activity 3
// To set two dates to two variables. We have to use the Date Object.
// const birthDay = new Date("2000,12,03")
// const todaysDate = new Date("2021, 11, 22");
// let diffInTime = todaysDate.getTime() - birthDay.getTime ()


// // This calculates the difference but IN milliseconds.
// let diffInTime = birthDay.getTime() - todaysDate.getTime()
// // To convert that to days we use this calculation.
// let diffInDays = diffInTime / (1000 * 3600 * 24);
// let years = diffInDays /365
// console.log(Math.floor(years))
// // // Finally, it is console logged out here using string template literals. 
// console.log(The difference between ${todaysDate} and ${birthDay} is ${diffInDays} days.);




// Activity 4 - Expected Answer

// let space1 = "x";
// let space2 = "o";
// let space3 = " ";
// let space4 = "x";
// let space5 = "x";
// let space6 = " ";
// let space7 = "o";
// let space8 = " ";
// let space9 = " ";
// let space0 = " ";
// let i = "|";
// let j = "--------";
// console.log (${space0}${i}${space0}${i}${space0});
// console.log (${space1}${i}${space2}${i}${space3});
// console.log (${space0}${i}${space0}${i}${space0});
// console.log(${j});
// console.log (${space0}${i}${space0}${i}${space0});
// console.log (${space4}${i}${space5}${i}${space6});
// console.log (${space0}${i}${space0}${i}${space0});
// console.log(${j});
// console.log (${space0}${i}${space0}${i}${space0});
// console.log (${space7}${i}${space8}${i}${space9});
// console.log (${space0}${i}${space0}${i}${space0});



// IF / ELSE , SWITCH

// // Activity 1
// let age = 16;

// if (age > 17){
//     console.log("Yes I can serve you")
// } else {
//     console.log("You aren't old enough")
// }

// // Activity 1 Stretch
// let age = 17;
// let country = "UK";

// if (age > 17 && country === "UK"){
//     console.log("Yes I can serve you")
// } else {
//     console.log("You aren't old enough")
// }


// // Activity 3

// let password = "12345678";

// if (password.length < 8){
//   console.log("This password is too short.");
// } else {
//   console.log(`Your new password is ${password}`);
// }

// // Activity 3 Stretch
// let num = 30;

// if (num % 3 == 0){
//   console.log("This number is divisble by 3.")
// } else if (num % 5 == 0){
//   console.log("This number is divisble by 5.");
// }

// // Switch Version
// let num = 25;
// switch(true) {
//   case num % 5 == 0:
//     console.log("This number is divisble by 5.")
//     break;
//   case num % 3 == 0:
//     console.log("This number is divisble by 3.")
//     break;
//   default:
//     console.log("This number is not divisble by 3 or 5.")
// }

// // Activity 4
// let num = 15;

// switch(true) {
//   case num % 5 == 0 && num % 3 == 0:
//     console.log("Fizz Buzz.")
//     break;
//   case num % 3 == 0:
//     console.log("Fizz.")
//     break;
//   case num % 5 == 0:
//     console.log("Buzz.")
//     break;
//   default:
//     console.log("This number is not divisble by 3 or 5.")
// }

// // Activity 5
// let num = 7261;
// let numString = num.toString(); 
// let reverseNumString = numString.split('').reverse().join('');

// if (num == reverseNumString){
//     console.log(`Yes ${num} is a palindrome`)
// } else {
//     console.log(`No ${num} is not a palindrome`)
// }

// // Activity 6
// let time = 7;
// let placeOfWork = "Manchester"
// let townOfHome = "Golborne"

// if (time == 8){
//   console.log(`I am commuting to work in ${placeOfWork}`);
// } else if (time == 7){
//   console.log(`I am at home in ${townOfHome}`);
// } else if (time == 9){
//   console.log(`I am at work in ${placeOfWork}`)
// } else {
//   console.log(`If it is between 9 and 5 I am at work in ${placeOfWork}. Otherwise, I'm at home in ${townOfHome}`);
// }

// // Activity 7
// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// // counter go through whole array using length as limiter
// for (let i = 0; i < vowelArr.length; i++){
// //  console.log(string.lastIndexOf(vowelArr[i]));
// // gets index of vowel in current iteration
//     index = string.lastIndexOf(vowelArr[i]);
// // compares current index to find highest index
// if (index >= highestIndex ){
// // so new highestindex becomes index
//     highestIndex = index;
// // won't reach last two nums in vowelarray
//     lastVowel = vowelArr[i];
// }
// }

// // This like logs the last Vowel to the console. 
// console.log(lastVowel); 
// // This line logs the index number of the last vowel. 
// console.log(highestIndex)

// // Activity 8
// let word = "evening";
// if (word.charAt(0) == word.charAt(word.length-1)){
//   console.log("True")
// } else {
//   console.log("False")
// }

// // Challenge 8
// let num1 = 7;
// let num2 = 7;
// let sum = num1 + num2;

// if (sum % 2 == 0){
//   console.log(`The sum = ${sum} and is even.`)
// } else {
//   console.log(`${num1 * num2}`)
// }

// FUNCTIONS

// const pressGrindBeans = () => {
//   console.log("Grinding for 20 seconds...");
// };

// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();

// let coffeeIsGrinding = false;
// let coffeeIsGrinding = "Yes it is grinding";
// let coffeeIsGrinding = 100;

// const pressGrindBeans = () => {
//   if (coffeeIsGrinding) {
//     console.log("Stopping the grind.")
//     coffeeIsGrinding = false;
//   } else {
//     console.log("Grinding is about to begin...")
//     coffeeIsGrinding = true;
//   }
// }

// pressGrindBeans();
// pressGrindBeans();


// let accNumber1 = 50449921;
// let accNumber2 = 72329100;
// let accNumber3 = 211542689;

// const cashWithdrawal = (amount, accnum) => {
//   console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, accNumber1);
// cashWithdrawal(30, accNumber2);
// cashWithdrawal(400, accNumber3);


// const addUp = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(addUp(100,392));


// const multiplyByNineFifths = (celsius) => {
//   return celsius * (9/5);
// };

// const getFarenheit = (celsius) => {
//   return multiplyByNineFifths(celsius) +32;
// } 
// console.log(`The temperature is ${getFarenheit(15)}F`);

// function factorial(n) {
//   if ((n === 0) || (n === 1)){
//   return 1;
//   } else {
//     return (n*factorial(n-1));
//   }
// }

// console.log(factorial(33));

// const coffeeOrder = (size, typeOfDrink) => {
//   console.log(`You coffee order is a ${size} ${typeOfDrink}.`);
// }

// const factorial = (n) => {
//   if ((n === 0)) || ((n === 1)){
//     return 1;
//   } else {
//     return (n* factorial(n-1))
//   }
// } 
// console.log(factorial(33))

// // Pizza topping function
// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//   console.log(`Pizza with ${topping1} & ${topping2}`);
//   orderCount++
// }

// console.log(takeOrder("Ham", "Pineapple"));
// // console.log(orderCount);

// // Cash Machine Function Challenge
// let pinNumber = 2425;
// let balance = 2000

// const cashMachine = (pin, amount) => {

//   if ((pin === pinNumber) && (amount <= balance)){
//     const newBalance = balance - amount;
//     console.log(`Succesfull! You have withdrawn £${amount}, your new balance is £${newBalance}.`)
//   } else if ((pin === pinNumber) && (amount > balance)){
//     console.log(`You cannot withdraw more than your current balance of £${balance}`)




