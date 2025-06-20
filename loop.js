// //For Loop
 for (let i = 0 ; i <= 10 ; i++) {
     console.log(i);
 }

//For Loop in the function
 const userNames = (userName) => {

     for ( let i = 0 ; i <= userName.length ; i++) {
         console.log(userName[i]);
     }

 }
 userNames ("Sudalai");

//Nested For Loop :-
 for (let i = 0 ; i <= 10 ; i++) {
     for (let j = 0 ; j <= i ; j++) {
         let multiply = i * j ;
         console.log(`${i} * ${j} is ${multiply}`);
     }
     console.log(`----------------`);   
}

// Star Pattern
 const symbol = "*";

 for (let i= 0 ; i <=5 ; i++) {
     console.log(symbol.repeat(i));
    
}

// Reverse Stars
const reverseStar = ` * `;
for (let i = 5 ; i >= 0 ; i--) {
    console.log(reverseStar.repeat(i)); 
}

// Finding the length of the character using loop
const userName = "Sudalaimani";
for (let i = 0 ; i <= userName.length ; i++) {
    console.log(i);  
}

// Find even and oddd numbers :-
for (let i = 0 ; i <= 100 ; i++) {
    let remainder = i % 2
    if (remainder === 0) {
        console.log(`The even of is ${i}`);
    }
    else{
        console.log(`The odd number ${i}`);

    }

}

// Find the vowels in the character :-
const checkCharacter = "Sudalaimani";
const charLower = checkCharacter.toLowerCase();
const vowels = "aeiou";
for ( let i = 0 ; i <= charLower.length ; i++) {
    if (vowels.includes(charLower[i])) {
        console.log(`${charLower[i]} is a vowel`);
    }else{
        console.log(`${charLower[i]} is not a vowel`);     
    }
}

// Find the number which is divided by 3 :-
for ( let i = 1 ; i <=50 ; i++) {
    let remainder = i % 3;
    if(remainder === 0) {
        console.log(`${i} is divided by 3`);
    }
    else {
        console.log(`${i} is not divided by 3`);
    }
}

// Find the number which is divided by 5 :-
for (let i = 1; i <= 60; i++) {
    let remainder = i % 5;
    if (remainder === 0) {
        console.log(`${i} is divided by 5`);
    }
    else {
        console.log(`${i} is not divided by 5`);

    }
}

// Find the number which is divided by 7 :-
for (let i = 1; i < 50; i++) {
    let remainder = i % 7;
    if (remainder === 0) {
        console.log(`${i} is divided by 7`);
    }
    else {
        console.log(`${i} is not divided by 7`);

    }
}

// Find the number which is divided by 9 :-
for (let i = 1 ; i <= 100 ; i++) {
    let remainder = i % 9 ;
    if (remainder === 0) {
         console.log(`${i} is divided by 9`);
    }
    else{
        console.log(`${i} is not divided by 9`);

    }
}
