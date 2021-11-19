// FUNCTIONS

// const pressGrindBeans = () => {

//     console.log("Grinding for 20 seconds");
// }

// SIMPLE EXAMPLE OF A FUNCTION WITH A STRING


// const person = {
//     number: 1,
//     myName:"Felice",
//     exampleFunction:()=>
// {     console.log(person.myName) }
// }
// person.exampleFunction()



//______________________________

//pressGrindBeans();

// const aSimpleFunction = () => {
//     console.log(" 'stop breaking my balls..' tony said. ");
// }
// aSimpleFunction(); // -----> this runs the function o: nameOfAnyFunction();




// FUNCTION WITH AN IF / ELSE STATEMENT


// let coffeeIsGrinding = false;

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




// _____________________ EXAMPLE OF PARAMETERS & FUNCTIONS:
// let accnumber = 22222222;

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);

// }

// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(24.77, 50449921);
//_____________________________

// const addUp =(num1, num2) => {
//     return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp(2,5));



//// functions calling on functions:

////Does the customer have enough funds requested? 
////.... check and return result to withdrawCash
////example:

// const MultiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };

// const getFahrenheit = (celsius) => {
//     return MultiplyByNineFifths(celsius) +32;
// };

// console.log("temperture is " + getFahrenheit(38) + "°F");

// const MultiplyByNineFifths = (celsius) => {
//         return celsius * (9/5);
//     };
    
//     const getFahrenheit = (celsius) => {
//         return MultiplyByNineFifths(celsius) +32;
//     };
    
//     celsiusInput = 38
    
//     console.log(`${celsiusInput} celsius = ${getFahrenheit(38)} + °F`);


//// joes example of not using a globl for celiusInput and not calling it in the console.log
// const MultiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };

// const getFahrenheit = (celsius) => {
//     console.log(`${celsius} celsius = ${MultiplyByNineFifths(celsius) +32} + °F`);
// };

// getFahrenheit(38)


// latest update joe pringle
//
//"getFahrenheit" now behaves like it did in the original example. It returns just a number, instead of a string explaining what the number is and stuff. This is useful because allows us to use the manipulate the result of the function for other operations, so we could do something like "IF getFahrenheit(38) >= 54; THEN console.log("too hot")"

//We can't do that with our edit of that function, because we changed the output of the function into a string and logged it to console.

//So i made a new function "logFahrenheit" with the sole purpose of using the original getFahrenheit function to print out the more user friendly version to console.

// const MultiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };

// const getFahrenheit = (celsius) => {
//     return MultiplyByNineFifths(celsius) +32
// };

// const logFahrenheit = (inputC) => {
//     console.log(`${inputC} celsius = ${MultiplyByNineFifths(inputC) +32} + °F`);
// }

// logFahrenheit(38)
// console.log(getFahrenheit(29)*2)

//_____________________
// ACTIVITIES:

//ACTIVITY 1
//Take this code and turn it into arrow function syntax:

// function factorial(n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

// // Arrow Function:
 
// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }

// }

// console.log(factorial(33));

// ACTIVITY 2

// let orderCount = 0
// let updated_orderCount = orderCount +1    though this isnt needed as its alrdy in the function below , see: ordercount ++

// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1}, ${topping2}`);
//     orderCount++;
//     console.log(`Order number: ${orderCount++}`);
    
// }


// takeOrder("pineapple", "ham");





// ACTIVITY 3

// let pin_number = 1234
// let accountBalance = 12344.00

// // // dispenses cash only if 1) pin number is correct and 2) withdraw amount <=  accountbalance

// const withdrawCash = () => {
//     if (pin_number == correct) {
//         console.log("Your pin number is correct")
//     } else ; console.log("Your pin number is incorrect, please try again")
// }

