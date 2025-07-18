axios.get(`https://jsonplaceholder.typicode.com/todos`).then(response => console.log(response)).catch(e => console.log(`The error is ${e}`)).finally(result => console.log(`Anyways`))


// Method One for "GET" :-
const getMethod = () => {
    axios({
        method:"get",
        url:"https://jsonplaceholder.typicode.com/users",
    }).then(response => console.log(response.data))
      .catch(err => console.log(`The error is ${err}`))
      .finally(postMethodFinally => console.log(`The above output is the first technique for the GET METHOD`));
};
getMethod();

// Method Two for "GET":-
const anotherAxiosMethodForGet = axios.get("https://jsonplaceholder.typicode.com/users")
    .then(respondedData => console.log(respondedData))
    .catch(error => console.log(`The error is ${error}`))
    .finally(getMethodFinally => console.log(`The above output is the second technique for the GET METHOD`));


// POST METHOD ONE :-
const postMethod = () => {
    axios({
        method:"post",
        url:`https://jsonplaceholder.typicode.com/todos`,
        data:{
            title:"New Todo",
            completed :false
        }
    }).then(postResponse => console.log(postResponse))
      .catch(postError => console.log(`The PostError is ${postError}`))
      .finally(finalResponse => console.log(`The above output is the First Technique  for the POST METHOD`));
};
postMethod(); 

// POST METHOD TWO :-
const postMethodTwo = axios.post(`https://jsonplaceholder.typicode.com/todos`, {
    title : `New Todo`, //Second Params (Parameters by separating using comma)
    isCompleted : false,
}).then(postMethodResponse => console.log(postMethodResponse))
    .catch(postMethodError => console.error(`The PostMethodError is ${postMethodError}`))
    .finally(finalPostMethod => console.log(`The above output is the second technique for the POST METHOD`));


// // PUT and PATCH
// // The PUT method is used to replace the entire resource
// // PATCH method is used to update it incrementally

// PUT METHOD ONE :-
const putMethodOne = () => {
    axios({
        method:"put",
        url:"https://jsonplaceholder.typicode.com/todos/1",
        dataOne : {
            title : "Updated Todo",
            isCompleted : true,
        }
    }).then(putMethodResponse => console.log(putMethodResponse))
      .catch(putMethodError => console.log(`The PUT method Error  is ${putMethodError}`))
      .finally(putMethodFinally => console.log(`The above output is the first technique for the PUT METHOD`));
}
putMethodOne();


// PUT METHOD TWO :-
const putMethodTwo = axios.put(`https://jsonplaceholder.typicode.com/todos/1`, {
    data : {
        title :"Practicing Todo",
        isCompleted : false,
    }
}).then(putMethodTwoResponse => console.log(putMethodTwoResponse))
     .catch(putMethodTwoError => console.log(`The Error for the PUT Method Two is ${putMethodTwoError}`))
     .finally(putMethodTwoFinally => console.log(`The above output is the second technique for the PUT METHOD`));

// PATCH METHOD ONE :-
const patchMethodOne = () => {
    axios({
        method : "patch",
        url : "https://jsonplaceholder.typicode.com/todos/1",
        data: {
            title : "Patch Method",
            isCompleted : false
        }
    }).then(patchMethodOneResponse => console.log(patchMethodOneResponse))
      .catch(patchMethodOneError => console.log(`The Error for the PATCH METHOD ONe is ${patchMethodOneError}`))
      .finally(patchMethodOneFinally => console.log(`The above code is the example for the  PATCH METHOD ONE`));
}
patchMethodOne();

//PATCH METHOD TWO :-
const patchMethodTwo = axios.patch("https://jsonplaceholder.typicode.com/todos/1",{
    data: {
        title : "Complete the today task",
        isCompleted : true,
    }
}).then(patchMethodTwoResponse => console.log(patchMethodTwoResponse))
  .catch(patchMethodTwoError => console.log(`The Error for the patch method two is ${patchMethodTwoError}`))
  .finally(patchMethodOneFinally => console.log(`The above code is the example for the PATCH METHOD TWO`));

// DELETE METHOD ONE :-
const deleteMethodOne = () => {
    axios({
        method : "delete",
        url : "https://jsonplaceholder.typicode.com/todos"
    }).then(deleteMethodOne => console.log(deleteMethodOneResponse)).catch(deleteMethodOneError => console.error(`The Error for the Delete method is ${deleteMethodOneError}`)).finally(deleteMethodFinalResponse => console.log(`The above code is the example for the  DELETE METHOD ONE`));
};
deleteMethodOne();

//DELETE METHOD TWO :-
const deleteMethodTwo = axios.delete("https://jsonplaceholder.typicode.com/todos/1")
.then(deleteMethodTwoResponse => console.log(deleteMethodTwoResponse))
.catch(deleteMethodTwoError => console.error(`The error for the delete method two is ${deleteMethodTwoError}`))
.finally(deleteMethodTwoFinally => console.log(`The above code is  the example for DELETE METHOD TWO`));

//SIMULTANEOUS DATA (ALL) METHOD ONE :-
const allMethodOne = () => {
    axios.all([
    axios.get("https://jsonplaceholder.typicode.com/users"),
    axios.get("https://jsonplaceholder.typicode.com/posts")
    ])
    .then(allMethodOneResponse => {
        console.log(allMethodOneResponse[0]);
        console.log(allMethodOneResponse[1]);
    })
    .catch(allMethodOneError => console.error(`The error for the ALL method is ${allMethodOneError}`))
    .finally(allMethodFinalResponse => console.log(`The above code is the example for the ALL Method One in AXIOS ${allMethodFinalResponse}`));
}
allMethodOne();

//METHOD TWO FOR SIMULTANEOUS DATA (ALL) :-
const allMethodTwo = axios.all([
    axios.get("https://jsonplaceholder.typicode.com/posts"),
    axios.get("https://jsonplaceholder.typicode.com/users")
    ])
.then(axios.spread( (posts, users) => {
        console.log(posts.data[0].title); //Accessing the specific data using the API
        console.log(users.data[0].name);  //Accessing the specific data using the API
    }))
.catch(allMethodTwoError => console.error(`The Error for the All Method Two is ${allMethodTwoError}`))
.finally(allMethodTwoFinally => console.log(`The above code is the example for the ALL Method Two in AXIOS`));

//SIMULTANEOUS METHOD THREE (ALL) SPREAD IN FUNCTION :-
const allMethodThree = () => {
    axios.all(
        [
            axios.get("https://jsonplaceholder.typicode.com/users"),
            axios.get("https://jsonplaceholder.typicode.com/posts")
        ]
    )
    .then(axios.spread( (users, posts) => {
        console.log("Accessing the Data inside the API : ",users.data[1].name);
        console.log("Accessing the DAta inside the API is :",posts.data[2].title);
    }))
    .catch(allMethodThreeError => console.error(`The Error for the all method using the method called SPREAD is ${allMethodThreeError}`))
    .finally(allMethodThreeFinally => console.log(`The above code is the example for the special method called SPREAD by using the SIMULTANEOUS (ALL) Method in AXIOS`));
}
allMethodThree();
