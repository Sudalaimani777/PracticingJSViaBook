//Promises :-
/*
i)  Promises are the objects that has the status of an async operation, and its corresponding value.
ii) Promises are used to solve the callback hell 
 */

const URL = "https://jsonplaceholder.typicode.com/users";
//Try 1
let promiseOne = fetch(URL);
console.log(promise);

promiseOne.then( (response) => {
    return response.json();

} ).then( (respondedData) => {
    console.log(respondedData);
    
}).catch( (err)=>{
    console.log(err);
});

//Try 2:-
const promise = fetch(URL);
console.log(promise);

promise.then( response => response.json()).then(responseData => console.log(responseData)).catch(e => console.log(`The error is ${e}`));

//Try 3 :-
const promises  = fetch(URL);
promises.then( urlResponse => urlResponse.json()).then(responseData => console.log(responseData)).catch( e => console.log(`The Error is ${e}`)).finally(results => console.log(`The result is ${results}`));

//Try 4 :-

const promiseFinally = fetch(URL).then(res => res.json()).then(resData => console.log(resData)).catch(e => console.log(`The error is ${e}`)).finally((alwaysResponded = "the output") => console.log(`Anyways the finally block will execute ${alwaysResponded}`))
