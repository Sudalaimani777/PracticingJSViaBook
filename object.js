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
