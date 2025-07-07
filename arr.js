//Check Palindrome - (Using join,reverse,split)
export const checkPalindrome = () => {
    const word = prompt(`Enter the word to check if it is Palindrome or not...`);
     const wordToLowerCase = word.toLowerCase();
     const palin = wordToLowerCase.split("").reverse("").join("")
     console.log(palin)
     const palindromeResult = alert(wordToLowerCase === palin ? `The word ${word} is a Plaindrome` : `The word ${word} is not a Palindrome`);  
}
checkPalindrome();

//Spread in Arrays :- Spread -> Right Side , Rest -> Left Side.
export const arrOne = [1, 2, 3, 4];
export const arr22 = [3, 4, 5]
export const attTwo = [...arrOne,...arr22]
console.log(attTwo);

//Destructurind of the array :- (Rest)
export const names = ["Sudalaimani", "Sivachandiran", "Muthuraj", "Kanniga"];
export const [rollNoOne, rollNoTwo, ...otherRollNums] = names;
console.log(otherRollNums);

//Copying an Array :- Array Reference ,
//Shallow Copy :-
export const  arr1 = [1, 2, 3];
export const arr2 = arr1;
console.log(`Array one is ${arr1}`);
console.log(`Array two is ${arr2}`);
arr2.push(4);
console.log(`Updated array two ${arr2}`);
console.log(`Updated array one ${arr1}`);
//Spread Operator :-

export const  arr4 = [1, 2, 3];
export const arr5 = [...arr1];
console.log(`Array four is ${arr4}`);
console.log(`Array five is ${arr5}`);
arr5.push(4);
console.log(`Updated array five ${arr5}`);
console.log(`Updated array four ${arr4}`);

 //Length :-
 export const userNames = "Mani";
 console.log(userNames.length);
 console.log(userNames.includes("M"));
 console.log(userNames.includes("z"));

 //Pop() :- Removes the last item
 export const pop = [1, 2, 3, 4];
 console.log(pop.pop());

 //Push :- Adds the item in the end of the array 
 export const push = ["One", "Two", "Three"];
 push.push("Four");
 console.log(push);

 export const pushValue = [1, 2, 3, 4, 5];
 pushValue.push([10, 11, 12]);
 console.log("Pushes the array inside an array", pushValue);

 //Sort :- 
 export const sort = ["a", "b", "d", "e", "i"];
 console.log("Original Array ->", sort.sort());
 console.log("Sorted Array ->", sort.sort());

 //Join :-
 export const join = ["mani", "kumar", "rajesh"];
 console.log("Without Joining -> ", join);
 console.log("Joined Array -> ", join.join("#"));

//Concat :-
export const concatOne = [1, 2, 3];
export const concatTwo = [4, 5, 6];
export const concatThree = concatOne.concat(concatTwo)
console.log("Concat One ->",concatOne);
console.log("Concat Two ->",concatTwo);
console.log("Concat Three ->",concatThree);


//Some and Every :-
// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

const wonGrammy  = songs.some(wonGrammy => wonGrammy.wonGrammy === true);
console.log(wonGrammy);

const views = songs.every(view => view.timesStreamed >= 1.500);
console.log(views)

//Map and forEach :-
const temperatures = [
   { degrees: 69, isRecordTemp: false},
   { degrees: 82, isRecordTemp: true },
   { degrees: 73, isRecordTemp: false },
   { degrees: 64, isRecordTemp: false }
];
console.log("Original Temperature", temperatures)

//Map :- Returns new array :-
const isHighTemp = temperatures.map(highTemp => {
  return highTemp.degrees >= 70 ? {...highTemp, highTemp : true} : {...highTemp, highTemp : false};
})
console.log("Using Map method", isHighTemp);

//forEach:- Doesn't retturn the new array :-
const recordHighTemps = isHighTemp.forEach(record => {
  const result = record.highTemp === true ? `The record high temps are ${record.degrees}` : `The lowest recorded Temps are ${record.degrees}`
  console.log(result);
})
// console.log("Using forEach method", recordHighTemps);


//Filter method :- Returns new array and it returns an empty array "[]" if the condition was not satisfied 
const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
]

//Starts With The Letter Of C
const nameStartsWithC = restaurants.filter(startsWithC => {
   return startsWithC.name.startsWith("C");
})
console.log("The Restaurants starts with a Letter of C is", nameStartsWithC);

//Starts With The Letter Of S
const nameStartsWithS = restaurants.filter(startsWithS => startsWithS.name.startsWith("S"));
console.log("The Restaurants starts with a Letter of S is", nameStartsWithS);

//Deep Filtering :-
const shortList = restaurants.filter(shortdistance => {
   return shortdistance.name.toLowerCase().includes("north") && shortdistance.milesAway < 3; //Use filtering to access more shortlist
});
console.log( "Long Filtering", shortList);

console.log("------------------------Reduce Mthod-------------------------")
//Reduce Method is a method which needs two arguements i)Callback Function, ii)Initial value of the operation that we want to be performed
//It iterates over each element :-
const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 }
];

const reduceMethod = menuItems.reduce( (acc, menuPrice) => {
   const totalPrice = `The acc is ${acc} and the menuPrice is ${menuPrice.price}`;
   console.log(totalPrice);
   return acc+menuPrice.price //Return the acc and Menu Price
}, 1) //Initial Value
console.log(reduceMethod);
console.log(`----------------Reduce Method Cahllenge---------------------`)
// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];
const electricCar = cars.reduce( (acc, car) => {
   if(car.isElectric) {
      return "The Sum of electric car is", acc + car.weight
   }
   else{
      return acc
   }
}, 0);
console.log(electricCar);
