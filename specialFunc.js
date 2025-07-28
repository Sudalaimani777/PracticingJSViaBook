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
