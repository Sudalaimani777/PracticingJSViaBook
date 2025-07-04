//1 Roll the dice :-
export const dice = {
    sides: 6,
    roll() {
        return Math.ceil(Math.random() * this.sides)
    }
}
console.log(dice.roll());

//2 Create any object of my fav :-

export const myFavAnimeList = {
    actionList: {
        numOne: "Naruto",
        numTwo: "OnePiece",
        numThree: "Bleach",
    },
    romanceList: {
        numOne: "I Want To Eat Your Pancreas",
        numTwo: "Your Name",
        numThree: "Kaguya Sama Love is War",
    },
    mystryList: {
        numOne: "Monster",
        numTwo: "Death Note",
        numThree: "Psyco Pass",
    }
}

console.log(myFavAnimeList);


//3 Circle Object :-
export const calculateCircle  = (radius) => {

    const circle = {
        area : Math.floor(Math.PI * radius ** 2) ,
        circumference : Math.floor(2 * Math.PI * radius)
    }
    console.log(circle.area);
    console.log(circle.circumference);
}

calculateCircle(10);

//4 
export const arrItem = {
    item : [],

    addValue (item) {
        return this.item.push(item) ;
    },

    removeValue (item) {
        return this.item.pop(item);
    }

}

console.log(arrItem.addValue("Mango"));
console.log(arrItem.item);

console.log(arrItem.removeValue());
console.log(arrItem.item);

//Shallow Copying Objects :-
//Original Obj :-
export const family = {
    role : "Mother",
    age : 35,
    isWorking : true,
    typeofWorks : {
        homeWork : "Cleaning",
        officeWork : "Team Leader"
    }
};
console.log(family);
//Copied Obj :-
export const role = {...family}
role.role = "Father";
console.log(role);
role.typeofWorks.homeWork = "Summa";
console.log(role);
console.log(family);

//Deep Copy :-
//Original Object :-
export const orgObject = {
    userName : "Sudalaimani",
    isStudent : true,
    age : 21,
    role : "ThandaSoru",
    achievements : {
        prices : "Second Rank in class 8th",
        other : "Vera Yedhum Illa"
    }
}

//Copied Obj :-
export const deepCopy = JSON.parse(JSON.stringify(orgObject));
console.log(deepCopy);

deepCopy.achievements.prices = "First price";
console.log(deepCopy.achievements.prices);
console.log(orgObject.achievements.prices);


//Destructuring :-

//1
const color = 'green';
const hexCode = '#0f0';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60"
};
colors[color] = hexCode;
console.log(colors);

//2
const colors = {
    "blue Color" : "#f00", 
    "Green Color" : "#f60"
}

const findColor = key => colors[key];
console.log(findColor("blue Color"));

//3
const user = {
  name: "Reed",
  userName: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"  
  }  
};


const {details, email:eMail, details : {title : tit}} = user;
console.log(details);
console.log(eMail);
console.log(tit)

const greetUser = ( {userName : name, details : {title : UserReward}} ) => {
    console.log(`The User name is ${name} and his reward is ${UserReward}`);
}
greetUser(user);


// Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).

// 1. Destructure the places to drink (coffee and beer) from recommendations
// 2. Destructure the places to listen to music
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked 
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: { 
        traditional: 'Fiddler\'s Elbow', 
        jazz: 'The Paris House'
    }
}

const palcesToDrink = ( {beer:alcoholic, coffee : nonAlcholic} ) => {
    console.log(`The alcoholic is ${alcoholic} and the non-alcoholic is ${nonAlcholic}`)
}
palcesToDrink(recommendations);

//2
const placesToListenMusic = ( {music : {traditional : traditionalMusic, jazz : jazzMusic}} ) => {
    console.log(`The traditional music for Brighton is ${traditionalMusic} and the UK's brst music is ${jazzMusic}`)
}
placesToListenMusic(recommendations);

// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked 
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument
const venue = ({music : {traditional : traditionalMusicPlace}, jazz : jazzMusicPlace}) => {
    console.log(`Brighton -> ${traditionalMusicPlace} , UK -> ${jazzMusicPlace}`)
}
venue(recommendations);

//Recalls :-
const details = {
    "User Name" : "Sudalaimani",
    "Age" : 21,
    "Address" : {
        DoorNo : "19 / 4"
    }
};
const deepCopy = JSON.parse(JSON.stringify(details));
console.log(deepCopy);
deepCopy["User Name"] = "Kumar";
console.log(`The deepCopy is -> ${deepCopy["User Name"]}`);
console.log(`The Original is -> ${details["User Name"]}`);

const {Address : {DoorNo : DoorAddress}} = details;
console.log(`The door number of the user is ${DoorAddress}`);

// Function Inside the Object :-
const greetUser = {
    greeting  : (user) => {
        console.log(`Hello ${user}`)
    }
};
console.log(greetUser);
console.log(greetUser.greeting("Sudalai"));

//Accessing the Objects in the Function:-
const userDet = {
    userName : "Arun", 
    userAge : 23
};
const userFunc = ( {userName:Name, userAge : Age} ) => {
    console.log(`He is ${Name} and his age is ${Age}`)
};
userFunc(userDet);


// 4th Lecture
// ShortHand Property :-
const shortObj = (personAge, personStatus) => {
  return  {
        personAge,
        personStatus
    }
}
const personOne = shortObj(50, "Single")
console.log(personOne);
//Variables converted into an object :-
const student = "Sudalaimani";
const studies = "UG";
console.log({student, studies}); //Accessing the variables  in to make the Object.


// Challenge: 
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

const favouritePlace = {
    music: "jazz",
    name: "Paris House"
};

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


//In is used  to check the property which is present in or not :-
const newObj = {
    "User Name" : "Jhon Doe",
    "is Working" : true
}
const checkRes = "User Name" in newObj;
console.log(checkRes);
//Using the Loop :-
for (let items  in newObj) {
    console.log(items, newObj[items]);
}

//Shallow Copy :- (GfG) :-
const personDetails = {
    name : "Jhon",
    add : "19/4"
}
console.log(personDetails);

const personOne = personDetails;
console.log(personOne);
personOne.add = "20";
console.log("Modified value", personOne.add);
console.log("Original Obj", personDetails.add);

//Deep Copy :-

const persoNTwo = {...personDetails};
persoNTwo.add = "30";
console.log("Deep Copied", persoNTwo.add);
console.log("Original", personDetails.add);

//Object.assign :- //Not making a reference of the Object, 
// still it is not a  deepcopy :-
const personThree = Object.assign({}, personDetails);
console.log(personThree);
personThree.name = "Sudalai";
console.log("Copied Person Three", personThree);
console.log("Original PersonDetails", personDetails);

//Optional Chaining :-
const userInfo  ={
     name : "Sudalai",
     address : {
        doorNumber : "19/4", 
        street  : "Ranasurnayakkanpatti", 
        state : "Tamil Nadu"
     }
}
console.log(userInfo.address.street);
