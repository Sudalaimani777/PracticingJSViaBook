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


