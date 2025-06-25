//RestParameter :-
//1 Shopping
export const createShoppingList = (...listItems) => {
    console.log(`You have ${listItems.length}`);

    for (let i = 0; i < listItems.length; i++) {
        console.log(`${i + 1}. ${listItems[i]}`);
    }
    listItems.length >= 5 ? console.log(`Check all the list items`) : console.log("");
}
createShoppingList("Apple", "Mango", "Orange", "Grapes", "Banana")

//2 Hero
export const hero = (heroTitle, ...heroes) => {
    console.log(`The team name is ${heroTitle}`);

    for (let i = 0; i < heroes.length; i++) {
        console.log(`${i + 1}. ${heroes[i]}`);
    }
    heroes.length >= 3 ? console.log(`The Heroes are ready to save the world!`) : console.log("");
}
hero("Straw Hats", "Lufffy", "Zoro", "Sanji");

//3 Fruit
export const fruitsList = (...fruits) => {
    console.log(`There are ${fruits.length} in the Basket`);
    for (let i = 0; i < fruits.length; i++) {
        console.log(`${i + 1} - ${fruits[i]}`);
    }
};
fruitsList("Apple", "Orange", "Grapes", "WaterMelon");

//RecursiveFunction :-
//1-Countdown :-

export const countDown = (num) => {
    if (num === 0) {
        console.log(`Done!`);
        return;
    }
    else {
        console.log(num);
        countDown(num - 1)
    }
}
countDown(6);

//2 Factorial :-
export const factorialLoop = (facNum) => {
    let res = 1;
    if (facNum === 0 || facNum === 1) {
        console.log(`The Factorial of ${facNum} is ${1}`)
    }
    else {
        for (let i = 2; i <= facNum; i++) {
            console.log(`The Factorial of ${i} is ${res *= i}`);
        }
    }
    return res;
}
factorialLoop(1)
