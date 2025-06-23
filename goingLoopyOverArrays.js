export const friuts = ["Apple", "Orange", 'Banana'];

export const results = friuts.forEach((arr, index, item) => {
    console.log(`Item at the position of ${index} in the ${arr} in the array of ${item}`);
})

export const suits = ['♠️', '♦️', '♣️', '❤️'];
export const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 'Jack', 'Queen', 'King'];
export const deck = [];
suits.forEach(suit =>
    values.forEach(value =>
        deck.push(`${value} of ${suit}`)
    )
);
console.log(deck);

export const map = [1, 2, 3].map((num) => {
    console.log(num + 2);
    
});

//1
export const arrOfStr = ["Apple", "Orange"];
export const strToUpper = arrOfStr.map((str) => {
    console.log(str.toUpperCase());   
});

//2
export const spanners = (parameter) => {
    return [...parameter].map((character) =>  
        `<li>${character}</li>`)
};
console.log(spanners("Grapes"));