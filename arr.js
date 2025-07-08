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

// Challenge: 
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

const favouritePlace = {
    music: "jazz",
    name: "Paris House"
};

//-----------------------------------------------------
const myMap = new Map([
    ["favPlaceOne", "UK"],
    ["favPlaceTwo", "Brighton"],
    ["visited", false],
    ["averageBill", 10000]
]);
console.log(myMap);

const visited = myMap.get("visited");
const favPalce = myMap.get("favPlaceOne");
console.log(favPalce)
console.log(visited);

Scrimba Array One
const todos = [];

const todo1 = {
  text: 'Wash the dishes',
  complete: false  
};

const todo2 = {
  text: 'Do laundry',
  complete: false  
};

todos.push(todo1, todo2);
todos.pop();
todos[1] = todo2;
todos[0] = todo1;
console.log(todos);

const one = [];
const two = {
  name : "Sudalai",
  age :20
}
const three = {
  name : "Guru",
  age : 20
}
one.push(two, three);
console.log(one)
console.log(one.pop())
console.log(one)

// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

// const favSongs = [];
// favSongs.push("Neethanae");
// favSongs.push("Mersal Arasan");
// favSongs.push("Nee kavithaigala");
// favSongs.push("Somewhere Only We Know");
// console.log(favSongs)//1
// console.log(favSongs[favSongs.length - 1]);//2
// console.log(favSongs.pop())//3

//FrontEnd Master 8/7/2025
//Creating an Object:-
const myDetails = {
  name: "K.Sudalaimani",
  age: 21,
  status: "College Student",
  membersInFamily: 5,
  committed: false,
  address: {
    doorNumber: "19/4",
    streetName: "Nadar Street",
    city: "Ettaiyapuram"
  },
  vehicle: "Cycle",
  hobbies: ["Drawing", "Coding", "Watching Anime", "Eat", "Sleep"]
}
console.log(myDetails);
console.log(myDetails.hobbies.length)


const mani = {...myDetails}
console.log("Spread Operator", mani );
// console.log("Rest Operator", sud);


//Scrimba 8/7/25
//Reduce Method :-
const numbers = [1, 2, 3, 4, 5, 6, 7];
const addNum = numbers.reduce((acc, sum)=> {
   acc.push(sum * 2); 
   return acc
},[])
console.log(addNum);

//Map Method:-
const mapMethod = numbers.map((num)=> {
    return num * 2
})
console.log(mapMethod) 

//2:-
const reduceGreater = numbers.reduce((acc, greater) => {
    if (greater > 3) {
        acc.push(greater)
    }
    return acc
}, []);
console.log(reduceGreater);
//USing Ternary Operator :-
const oneMore = numbers.reduce((acc, num) => {
    const res  = num > 3 ? acc.concat(num) : acc;
    return res;
}, [])
console.log("Try", oneMore);

//Map Method :-
const mapGreat = numbers.map(greaterThanThree => {
    if (greaterThanThree > 3) {
        console.log(greaterThanThree)
    }
});

//Filter:-
const filterMethod = numbers.filter(num => num > 3);
console.log(filterMethod);

//Rest and Spread Operator :-
//1:-
const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken', "Fried Rice"];
const allMenuIdeas = [...lunchMenuIdeas];
allMenuIdeas.push('Club Sandwich');
console.log(allMenuIdeas);

const tamilFoods = [...lunchMenuIdeas];
console.log("Tamil Foods",tamilFoods);
tamilFoods.push("Biriyani");

const [morning, afternoon, ...dinner] = tamilFoods;
console.log("The Dinner menu are ", dinner);

//2
const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon"
];
const [one,...two]= finalMenuItems;
console.log(two);

//Swapping :-
const swappingMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken"
];
let [firstDish, secondDish] = swappingMenuItems;
console.log(`Before`, {firstDish}, {secondDish})
[secondDish, firstDish] = [firstDish, secondDish];
console.log("After", {firstDish}, {secondDish})

// Challenge: 
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Modify these four variables first
//Fish Dish :-
const [chefFavFishDishes, ...chefRegularFishDishes] = fishDishes;
console.log({chefFavFishDishes}, {chefRegularFishDishes});
//Meat Dish :-
const [chefRegularMeatDishes,...chefFavMeatDish] = meatDishes;
console.log({chefFavMeatDish}, {chefRegularMeatDishes});
// Finally, use the spread operator to create these two arrays as well
const chefsDishes = [chefFavFishDishes, ...chefFavMeatDish];
console.log("Chef Fav Dishes", {chefsDishes});
const regularDishes = [...chefRegularFishDishes,chefRegularMeatDishes];
console.log("Regular Dish", {regularDishes});
