//Pure Function

/**

1)It takes an argument
2)It should return something
3)fot the same input you should get the same output
4)The result should not be influenced by the outer parameter
5) It should not mutate the original argument

 */
//Pure Function :-
const doubleValue = (num) => { //has an argument
    let res = num*2 //not influenced by external parameters by inner itself
    console.log(res);
    return res;
}
doubleValue(4)

//Impure Function :-
const value = 10;

const mulByTwo = (number) => {
    let res = number * 2 * value; //Influenced by the external value as parameter "value"
    console.log(res);
    return res;
}
mulByTwo(20);

//Pure Function :-
const appendArr = (arr) => {
    let newArr = [];
    newArr.push(...arr, 5, 6,);
    console.log(newArr);
    return newArr;
}
appendArr([1, 2, 3]);

//First Class Function :-
/**
 * The functions are treated like any other variable or data type
 * A func can be passed as a argument to an other function
 */

//1 Passing the function as a argument
const myFunc = () => {
     return "This is the first class function" ;
}

const greet = (inner, name) => {
    let message= inner();
    console.log(message);
    console.log(message, name);
};
greet(myFunc, "Kumar") //Taking the function as an argument "myFunc"

//Returning the Function :-
const retFunc = () => {
    const innerFunc = () => {
        let name = "Kumar";
        console.log(name, "Welcome");
    };
    return innerFunc;
};

const res = retFunc();
res()


//3) Assign a function in the variable :-
const assignFuncToTheVariable = function () {
    console.log("Hello");
};
assignFuncToTheVariable();

//Higher Order Function :-
/**
 * 1)Takes an another function as an argument.
 * 2)Return the another function as a result.
 */

const greetMessage = () => {
    return "Good Morning";
};

const higherOrderFunc = (inner) => {
    let message = inner()
    console.log("Mani", message);
};
// higherOrderFunc(greetMessage);

const displayMessage = () => {
    return  () => {
        console.log("Inner Func");
    }
};
const res = displayMessage();
// res();

//Example :-
const num  = [1, 2, 3, 4];

const squareNum = (number) => {
    const squareNumContainer = [];
    for (let numbers of number) {
        squareNumContainer.push(numbers ** 2);
    };
    return squareNumContainer;
}
const output = squareNum(num);
console.log("Square ->", output);

const cubeNum = (num) => {
    const cubeNumContainer = [];
    for (let cubeNum of num){
        cubeNumContainer.push(cubeNum ** 3);
    };
    return cubeNumContainer;
};
const cubeNumOutput = cubeNum(num);
console.log("Cube ->", cubeNumOutput);


//Recursion :-
//Function which is called by itself is known as "Recursion"
 const calcSum = (num) => {
    let total = 0
    for(let i = 0; i <= num ; i++) {
        total += i;
        // console.log(total);
    }
    return total;
 }
 const res = calcSum(10);
 console.log(res);

 //Recursive Func :-
const recursiveFunc = (number) => {
    if (number === 1) {
        return number
    }
    return number + recursiveFunc(number - 1);
}
const result = recursiveFunc(10);
console.log(result );


const factorialNumber = (num) => {
    if(num === 1){
        return num;
    }
    return num * factorialNumber(num - 1);
};
const value = factorialNumber(5);
console.log(value);


const recursive= (number) => {
    if (number === 1){
        return number;
    }
    return number + recursive(number - 1);
};

const out = recursive(10);
console.log(out);

const factorial = (num) => {
    if(num === 1){
        return num;
    }
    return num * factorial(num - 1);
};

const facOutput = factorial(20);
console.log(facOutput);
