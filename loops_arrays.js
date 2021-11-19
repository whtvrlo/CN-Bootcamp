// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ] ; 


// coffeeOrder.push ("Donna - espresso");
// console.log(coffeeOrder);


// array starts with square brackets. and can have different types of data. Use comma to separate items. Last item doesnt need comma.
// Finish with ];

// take individual items in list by using [0] --> you will get first one in list. (Alex - Cortado)
// console.log(coffeeOrder[1]);

// you can UPDATE / REASSIGN arrays like this:

// coffeeOrder[1] = "Ann - Vanilla latte";

// (though its not the most useful....)

// you can use length properties on array 

// PROPERTIES ON ARRAY - length will output number of items, not string
// console.log(CoffeeOrder.length)


// OTHER METHODS
// .push()              adds to end of Array
// .pop()               removes   last item .pop();
// .map()
// .unshift()
// .shift()             remove item from start of array
// .splice()            splice up array into certain sections
// .unsplice()


// // CASINO / CHANCE (dice) EXAMPLE:
// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);


// practice:

// let fav_songs= [
//     "waiting for tonight - jlo",
//     "touch my body - mariah carey",
//     "queen - somebody to love "
// ] ; 


// fav_songs.push ("first time - roberta flack");
// console.log(fav_songs);
// fav_songs.push ("lets get loud - cant remember artist name");
// fav_songs.push ("im blue lab dab di dab dab da - cant remember artist name");
// console.log(fav_songs);
// fav_songs.pop()
// console.log(fav_songs);
// fav_songs.slice("")
// console.log(fav_songs);

// let favDrinks = [
//     "Whiskey",
//     "Red Wine",
//     "Hot Water"
// ] ; 

// console.log(favDrinks[0]);
// console.log(favDrinks[1]);
// console.log(favDrinks[2]);

// ITTERATIONAL LOOPS

// let favDrinks = [
//     "Coke",
//     "Fanta",
//     "Tonic",
//     "Red Bull"

// ];

// for(let i = 0; i < favDrinks.length; i++){
//     console.log(favDrinks[i]);
// }

// let multiplesTwo =[];

// for(let i = 0; i < 20; i++){
//     if (i % 2 == 0) {
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are:${multiplesTwo}`)

//FOR LOOPS: run a finite or limited number of times

// WHILE LOOPS
// Run when a condition is met (or not, so could be infinite!) WARNING / ADVICE:
// In while loops is good to know that ctrl +c exits your code so your loop doesnt run forever if u mess it up


// while loop example (check voice recording on phone for explanation)
// let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
// let currentCard = 'Club';

// while (currentCard != 'Spade'){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()* 4)]
// }

// console.log(currentCard)


// ACTIVITIES/ CHALLENGES

// ACTIVITY 1:
// let fav_films = ["Mad Max",
//                  "Tampopo",
//                  "Under The Skin"

// ];


// fav_films.push ("Lost in Translation")
// fav_films.push ("The Tale of Princess Kaguya")
// fav_films.pop();
// console.log(fav_films);

// for (let i = 0; i < fav_films.length; i++){
//     console.log(fav_films[i]);
// }

// ACTIVIY 2

// let randomNumber =[]

// for(let i = 0; i < 6; i++){
//     let randomNumber =(Math.floor(Math.random() * 51))
//     randomNumber.push
//     console.log(randomNumber);
// }



// felice valentine explanation
// let numarr = []
// let arr  = [1,2,3,4,5]
// console.log(arr.length)
// console.log( 5 == arr.length)
// for(let i =3; i <arr.length; i++){


// let randomNumber =(Math.floor(Math.random() * 51))
// numarr.push(randomNumber)


//       }
//     console.log(numarr)



// let numRound=[]
// for( let rounds = 0; rounds <= 3 ; rounds++){
// numRound.push("round nr" + rounds)
// console.log(rounds)
// console.log(numRound)
// }

// let numarr = []

// for(let i =0; i<6; i++){


//     let randomNumber =(Math.floor(Math.random() * 51))
// numarr.push(randomNumber)
// console.log(numarr)

//       }

// ACTIVITY 3

// let randomNumber =[]

// for(let i = 0; i < 6; i++){
//     let randomNumber =(Math.floor(Math.random() * 51))
//     randomNumber.push
//     console.log(randomNumber);
// }


// let countdown = []

// for(let i = 9 ; i > -1; i--){

//     countdown.push
//     console.log(i)
// }


// for(let i = 9 ; i > -1; i--){
    
//     countdown.push
//     console.log(i)
// }

// for(let i = 0; i < 10; i++){
    
//     countdown.push
//     console.log(i)

// }





// for(let i = 9; i > -1; i--){
    
//     countdown.push
//     console.log(i)
// }



// anastasias


// //I created an empty array.  I then made a loop that kept adding numbers from 0-9
// let countNineArray = [];
// //populates an array with numbers from 0-9
// for (let i = 0; i < 10; i++) {
//   countNineArray.push(i);
// }
// //then I used .reverse() , which is an inbuilt method that reverses arrays
// //reverses array
// let reverseArray = countNineArray.reverse();
// // and created a loop that iterates over the reversed array
// for (i = 0; i < reverseArray.length; i++) {
//   console.log(reverseArray[i]);
// }


// ACTIVITY 4
let storedFilms = [ "Jurassic Park",
                    "Lord of the Rings",
                    "Ghostbusters",
                    "ET"
                    
];


for(let i = 0; i < storedFilms.length; i++) {
    console.log(storedFilms[i]); }
  
if (storedFilms[2] == "Ghostbusters"){
        console.log("Yay it's Ghostbusters!")

    }
    else {console.log("Boo! We want Ghostbusters!")}



// ACTIVITY 5

// let random_number = []

// for (let i = 0; i<6 ; i++){
//     let random_number =(Math.floor(Math.random() * 31))
//     // random_number.push
//     console.log(random_number);

// }



// ACTIVITY 6

// let bobsFollowers = [ "David", 
//                     "Jane", 
//                     "Abdul", 
//                     "Nikky"

// ];

// let hannahsFollowers = [ "Mohammed",
//                         "Nikky",
//                         "Abdul", 
//                         "Bilal"

// ];

// let mutual_followers = 

// if (typeof(hannahsFollowers) == 

// for(let i = 0; i < storedFilms.length; i++) {
//     console.log(storedFilms[i]); }
  
// if (storedFilms[2] == "Ghostbusters"){
//         console.log("Yay it's Ghostbusters!")
//     }
//     else {console.log("Boo! We want Ghostbusters!")}




// (Math.floor(Math.random() * 31))


// Angela Yu 


