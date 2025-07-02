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
