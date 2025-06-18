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
