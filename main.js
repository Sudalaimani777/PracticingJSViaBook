import { stringsArray, filterMethod } from "./logic.js";
import { marks, result, i} from "./ternaryOperator.js";

import { maths,physics, chemistry, biology, result, name,playerGuess,correctAnswer,message, guess, selectItem, dreamHoliday, user, hasValidEmail, response, isModerator, karma, hasEnoughKarma, canUpvote, canDelete} from "./logicalOperator.js";

import { lastChar, reverse, arr, pushValue, popvalue, greet,calculateSum, findLargestNum, numRes,findSum,findSumRes, closure, outer, capsName, like , handlelike , countingDown , countdown , bill} from "./function.js"

import { dice, myFavAnimeList, calculateCircle, arrItem, family, role, orgObject, deepCopy } from "./object.js";
import { task, submitBtn, arr} from "./todolist.js";
import { heading, para } from "./dom.js";
import {headTag,keyBoardEvent, inputField, button, heading } from "./event.js";
import { friuts, results, suits, values, deck, map, arrOfStr, strToUpper, spanners } from "./goingLoopyOverArrays.js";
import { createShoppingList, hero, fruitsList, countDown, factorialLoop } from "./functional.js";
import { qOne, ans, qOneAns, message, setTime,logAnsTimer, logAnswer, shutDown } from "./setTime.js";
import { dateSnapshot, year, errorMessage } from "./constructor.js";
// import { userNames, pop, push, sort, join, concatOne, concatTwo, concatThree, pushValue} from "./arr.js";

//Task 1 :-
const noOfPeople = Number(prompt(`How many people went to the restaurant?`));
const billAmount = Number(prompt(`How much is the total bill?`));
const billSharing = billAmount / noOfPeople ;
const message = alert(`${billSharing.toFixed("2")}`);
console.log(billAmount);

//Task-2 :-
 const principalAmount= Number(prompt(`Enter the Principal Amount`));
 const intrest = Number(prompt(`Enter the Intrest`));
 const years = Number(prompt(`Enter the Years`));
 const intrestCalculator = (principalAmount * intrest * years) / 100;
 const simpleIntrest = alert(`The Simple Intrest is ${intrestCalculator}`);
