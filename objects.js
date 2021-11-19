
// function greet(name) {object.property}, name is parameter

// greet ('John')    (john is called parameter)


//HOW TO ACCESS DATE IN OBJECT
//person.name
//console.log(person.name)
// or access with bracket notation (person["Artistname"]); in stead of .notation
// 
//
//
//}
// 

// you can store different data types in n object.
// WITH BRACKETS WE CAN USE VARIABLES TO SELECTS KEYS OF OBJECT

// console.log(cafe.openCafe());
//___________________________________


///IF , ELSE IF + OBJECT:::::::
// ____________________________________________
let offer ="none";
let time = 1000;

const cafe = {
  name: "Whitesheep",
  seatingCapacity: 100,
  hasSpecialOffers: true,
  drinks: [
    "Cappucino",
    "Latte",
    "Filter Coffee",
    "Tea",
    "Hot Chocolate"
  ],
  breakfastOffer: "Free croissant with coffee.",
  lunchOffer: "Free drink with surprisingly priced sandwich.",
  noOffer: "Sorry no offer."
};

if (time < 1100){
  offer = cafe.breakfastOffer;
  console.log(offer);
} else if (time < 1500){
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer);
}

// _____________________________





//MUTEABLE meaning we can change objects once we've made them

// cafe.biscuits =["waffle, "shortbread]; 
// or
// cafe["biscuits"] = ["waffle", "shortbread"];





// ALARM

// james one:
// const day = "monday"
// let alarm = ""
// const alarmclock = {
//   weekendAlarm: "no alarm needed",
//   weekdayAlarm: "get up at 7am"
// }

// if (day === "saturday" || day === "sunday"){
//   alarm = alarmclock.weekendAlarm
// }else {
//   alarm = alarmclock.weekdayAlarm
// }
// console.log(alarm)

// let day = "weekday";
// let alarm = "weekendAlarm";


// const alarmDay = {
//     ["Saturday",
//     "Sunday",
//     "Weekday"
// ],

// weekendAlarm: "No alarm needed.",
// weekdayAlarm: "Free drink with surprisingly priced sandwich.",
//   noOffer: "Get up at 7am."
// }

// if (day == "Saturday" || "Sunday"){
//     offer = cafe.breakfastOffer;
//     console.log(alarm);
//   } else if (){
//     offer = cafe.lunchOffer;
//     console.log(offer);
//   } else {
//     offer = cafe.noOffer;
//     console.log(offer);
//   }



// const person = {
//     artistName: "mica",
//     favVenueCapacity: 300,
//     venueIsOfficial: true,
//     line_up: ["curl", "support act 1", "support act 2"]

// };

// console.log(person.artistName); 

// // or access with bracket notation (person["Artistname"]); in stead of .notation


// console.log(person.line_up); 





// ACTIVITIES

// ACTIVITY 1
// function within an object

// const person = {
//     number: 1,
//     myName:"Felice",
//     sayHi:()=>
// {     console.log(`Hello my name is ${myName}`)}
// }
// person.sayHi()

// const person = {
//     number: 1,
//     myName:"Felice",
//     exampleFunction:()=>
// {     console.log(person.myName) }
// }
// person.exampleFunction()


// const person = {
//     name: "mica",
//     favVenueCapacity: 300,
//     venueIsOfficial: true,
//     line_up: ["curl", "support act 1", "support act 2"],
//     sayHi:()=> 
//     {console.log(`hi my name is ${person.name}`)}
// }
// person.sayHi()



