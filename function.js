//1
export const lastChar = (name) => console.log(name[name.length-1]);
lastChar("Hllo");

//2
export const reverse = (char) =>  console.log(`The reversed word is ${char.split("").reverse().join()}`);
reverse("mani")

//3 
export const arr = [];

export const pushValue = (pushValue) => arr.push(pushValue);
pushValue("apple")

export const popvalue = popedValue => arr.pop(popedValue);
popvalue();

//Add and Remove;
//Push
pushValue("Apple");
pushValue("Mango");
pushValue("Orange");
pushValue("Grapes");
pushValue("WaterMelon");

//Pop
popvalue();

console.log(arr);

//Function:-
export function greet (name) { //name - Parameter
     console.log(`Hello, ${name}`);
 }
//Calling the function :-
greet("Sudalaimani"); //Arguement

//Anonymous Function :-
greets();

const greets = () => {
     console.log(typeof greets);
    
}

const summa = function sum () {
    console.log("hello");
    
}
 summa();

//Cosure :-

export const outer = () => {
    let count = 0
     const inner = () => {
         count += 5;
         console.log(count);
     }
     return inner;
}

//CapsName
export const capsName = user => `${user.charAt(0).toUpperCase()}${user.slice(1)}`; 
console.log(capitalizeName("umanr"));

//Bill
export const bill = (amount, numOfPeople) => `Each person need to pay ${amount / numOfPeople}`
console.log(bill(200, 4));

// Stretch goal start
export const countdown = (startingNumber, step) => {
  let countFromNum = startingNumber + step;
  return () => countFromNum -= step;
}

export const countingDown = countdown(20, 2);
console.log(countingDown());
console.log(countingDown());
console.log(countingDown());

//LikeCount :-
export const handlelike = (count) => {
  let likeCount = 0;
  return () => {
    likeCount += count;
    return likeCount;
  }
}

export const like = handlelike(1,1);
console.log(like()); 
console.log(like()); 
console.log(like()); 
