const marks = 90;
console.log( marks > 30 ? "Passes" : "Failed" );

const results = marks < 20 ? "Work Hard 🤞" : marks < 40 ? "Keep Going 🎆 " : marks < 60 ? "Nice ♨️" : marks <= 70 ? "Suuuuuuperrrrr 🔥" : marks >= 90 ? "Massda 🌕" : "Rocking" ;
console.log(results);

//Using Loops
let i = "" ;

for (i = 1 ; i <= 100 ; i++) { 
   let result = i % 3 === 0 ? `Fizz` : i % 5 === 0 ? `Buzz` : i % 15 === 0  ? `FizzBuzz` : i
  console.log(result);  
 }
