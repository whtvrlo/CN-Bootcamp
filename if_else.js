// if (condition1) {
//     //do this
// }
// else if (condition2) {
//     //do this
// }
// else {
//     //else if nothing else matched do this
// }


// // EXAMPLE

// let day = "Saturday";

// if (day == "Saturday" || day == "Sunday" ){
//     console.log("It's weekend!")
// }
// else {
//     console.log("When's weekend?");
// }


// COMPARISON OPERATORS / COMPARITORS
// ==   equal                   ; checks if values are equal regardless of types                             
// ===  strict equal            ; checks if the values and type are equal                        
// !=   not equal               ; checks if the values are not equal regardless of type                       
// !==  strict not equal        ; checks if the values and type are not equal                   
 
// COMBINING COMPARITORS
// &&       both conditions have to be met in order for the code to run
// || or    either condition can be met in order for the code to run
// !        not

// more operators:
// < 
// >
// <== 
// >==  
// //                                         
// %



// DIFFERENCE === and ==:
// let a = 1;
// let b = "1";

// console.log(typeof(a));
// console.log(typeof(b));

// if (a == b) {
//     console.log("yes")
// } else {
//     console.log("no")
// }

// now change == to === to verify that with three === it also makes sure it's equal in data type
// 

// EXAMPLES

// let weather = "rainy";

// if (weather == "sunny") {
//     console.log("Well, I better wear some suncream!")
// } else if (weather == "rainy") {
//     console.log("Better take an umbrella")
// } else {
//     console.log("Hmmm, it could go either way!")
// }

// let place = "Manc";
// let weather = "Cloudy";

// if (place = "Manc" || weather == "Rain") {
//     console.log("Check again");
// }
// else if (place == "Manc" || weather === "Rain") {
//     console.log("Obvs");
// }
// else {
//     console.log("What it isn't raining?");
// }


// SWITCH   (allows us to make this a lot simpler)
// switch(expression){
//     case x:
//         //code here
//         break; 
//     case y:
//         // code here
//         break;
//     default:
//         // code here
// }

// this code doesnt break if x is true, it would go to the other ones.



// USING IF ELSE COMBINED WITH LET (LOVE CALCULATOR VARIABLE)

//prompt not working yet!
// prompt("What is your name?");
// prompt("What's your crushes name?");

// var loveScore = Math.random()*101 //() because you always do 1 more to the point you want it to, as 0 is counted in too. But Angela Yu does it below the updated lovescore writing +1 after it. : loveScore = Math.floor(lovescore) +1;
// loveScore = Math.floor(loveScore);

// if (loveScore > 70) {
//     console.log(`Your love score is ${loveScore} % You love each other like Kanye loves Kanye... ;)`);
// }

//     else {
//         console.log(`Your love score is ${loveScore} %`);
//     }


// console.log(`Your love score is ${loveScore} %`);




// ACTIVITIES______________________________________________________________________

// let age = 9

// if(age < 17){
//      console.log("I can't serve you, you aren't old enough") 
// }       
// else {
//     console.log("I can serve you")
// }


// let age = 1000

// if(age >= 17){
//      console.log("I can serve you") 
// }       
// else {
//     console.log("I can't serve you")
// }

// STRETCH:


// let age = 16
// let country = "madagascar"

// if(age >= 17 && country == "UK"){
//      console.log("I can serve you") 
// }       
// else if(age< 17 && country =="UK"){
//     console.log("Sorry, I can't serve you alcohol")
// }
// else if(age<17 && country !="UK"){
//     console.log("Sorry, I can't serve you alcohol")

// }
// else {
//     console.log("What do you want to drink")
// }


// //ACTIVITY 2
// switch(expression){
//     case x:
//         //code here
//         break; 
//     case y:
//         // code here
//         break;
//     default:
//         // code here
// }

// let fav_pizzaTopping ="ham";

// switch(fav_pizzaTopping){
//     case "salami" :
//         console.log("These are important ingredients for my pizza")
//         break;
//     case "cheese":
//         console.log(` ${pizzaTopping} should not be on my pizza`)
//         break;
//     default:
//         console.log(`I don't mind having ${fav_pizzaTopping} on my pizza`)

// }


// ACTIVITY 3

// let password = "ddddddddd"

// if (password.length < 8) {
//     console.log("Password too short")
// }

// else {
//     console.log(`Password is correct: ${password}`)
// }

// STRETCH
// let num= "10"

// if (num % 3 === 0 && num % 5 === 0 )  {
//     console.log("This number is divisible by 3 and 5")
// }
// else if (num % 5 === 0 ) {
//     console.log("This number is divisible by 5")
// }
// else if (num % 3 === 0 ) {
//     console.log("This number is divisible by 3")
// }
// else {
//     console.log("This number is not divisble by 3 or 5")

// }

// // ACTIVITY 4
// let num = 15

// if (num % 3 === 0 && num % 5 == 0) {
//     console.log("fizz buzz")
// }
// else if (num % 3 === 0) {
//     console.log("fizz")
// }
// else if (num % 5 === 0) {
//     console.log("buzz")
// }
// else {
//     console.log("num")
// }

// make sure you did fizzbuzz first


// ACTIVITY 5

// let num = 123321;
// let num2String = num.toString();
// let reverseNum2String = num2String.split(' ').reverse().join(''); // .split('') lets you split letters individually , .join('') does the opposite

// console.log(reverseNum2String);

// if (num == reverseNum2String) {
//     console.log(`${num} is a palindrome`)
// }
// else {
//     console.log(`${num} is not a palindrome`)
// }


// ACTIVITY 6 
// Create a variable called time, a variable called placeOfWork
// and a variable called townOfHome. Create an if statement that
// logs to the console where someone is at times of the day. E.g. if
// the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

//// time is a 24 hour number, so aprox 1 minute to 6pm would be written as 17.99 (math comparison aren't true)
// let time = 6
// let name_person = "hassan"

// if (time >= 9 && time <= 17){
//     console.log("You're at work");
// }
// else if (time <= 7.99 && time >= 8.99){
//     console.log(`${name_person} is commuting `);
// }
// else if (time >= 17 && time <=17.99 ){
//     console.log(`${name_person} is commuting `);
// }
// else {
//     console.log(`${name_person} should be at home`);
// }

// ACTIVITY 7
//  let string = "hdhdjhjdhkfjskehdfkgjdsuhfkjadhfkejhuhushsushisdhdhuahffdjshddadak"
//  let string_split = string.split()
//  let searchVowels = "a,e,i,o,u,A,E,I,O,U"
//  let vowel_split = searchVowels.split()

// console.log(`the index of the first ${vowel_split} from the end is ${string.lastIndexOf(vowel_split)}`);

// right answer:
// Activity 7
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


 
// ACTIVITY 8


// ACTIVITY 9

// let num1 = 9
// let num2 = 2
// let answerDivided = num1*num2

// if(num1 % 2 == 0 && num2 %2 == 0) {
//     console.log(`${num1} & ${num2} `)
// }
// else if(num1 % 2 == 0 && num2 !== 0) {
//         console.log(num1);
//     }
// else if (num2 % 2 == 0 && num1 !== 0) {
//             console.log(num2);
//         }
// else {
//             console.log(answerDivided);
//         }




