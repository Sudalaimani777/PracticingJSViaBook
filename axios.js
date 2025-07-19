//AXIOS GLOBAL :-
const globalAxios = axios.defaults.headers.common["X-Auth-Token"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

axios.get(`https://jsonplaceholder.typicode.com/todos`).then(response => console.log(response)).catch(e => console.log(`The error is ${e}`)).finally(result => console.log(`Anyways`))

// Method One for "GET" :-
const getMethod = () => {
    axios({
        method:"get",
        url:"https://jsonplaceholder.typicode.com/users",
    }).then(response => console.log(response.data)).catch(err => console.log(`The error is ${err}`)).finally(postMethodFinally => console.log(`The above output is the first technique for the GET METHOD`));
};
getMethod();

// Method Two for "GET":-
const anotherAxiosMethodForGet = axios.get("https://jsonplaceholder.typicode.com/users").then(respondedData => console.log(respondedData)).catch(error => console.log(`The error is ${error}`)).finally(getMethodFinally => console.log(`The above output is the second technique for the GET METHOD`));


// POST METHOD ONE :-
const postMethod = () => {
    axios({
        method:"post",
        url:`https://jsonplaceholder.typicode.com/todos`,
        data:{
            title:"New Todo",
            completed :false
        }
    }).then(postResponse => console.log(postResponse)).catch(postError => console.log(`The PostError is ${postError}`)).finally(finalResponse => console.log(`The above output is the First Technique  for the POST METHOD`));
};
postMethod(); 

// POST METHOD TWO :-
const postMethodTwo = axios.post(`https://jsonplaceholder.typicode.com/todos`, {
    title : `New Todo`, //Second Params (Parameters by separating using comma)
    isCompleted : false,
}).then(postMethodResponse => console.log(postMethodResponse)).catch(postMethodError => console.error(`The PostMethodError is ${postMethodError}`)).finally(finalPostMethod => console.log(`The above output is the second technique for the POST METHOD`));


// PUT and PATCH
// The PUT method is used to replace the entire resource
// PATCH method is used to update it incrementally

// PUT METHOD ONE :-
const putMethodOne = () => {
    axios({
        method:"put",
        url:"https://jsonplaceholder.typicode.com/todos/1",
        dataOne : {
            title : "Updated Todo",
            isCompleted : true,
        }
    }).then(putMethodResponse => console.log(putMethodResponse)).catch(putMethodError => console.log(`The PUT method Error  is ${putMethodError}`)).finally(putMethodFinally => console.log(`The above output is the first technique for the PUT METHOD`));
}
putMethodOne();



// PUT METHOD TWO :-
const putMethodTwo = axios.put(`https://jsonplaceholder.typicode.com/todos/1`, {
    data : {
        title :"Practicing Todo",
        isCompleted : false,
    }
}).then(putMethodTwoResponse => console.log(putMethodTwoResponse)).catch(putMethodTwoError => console.log(`The Error for the PUT Method Two is ${putMethodTwoError}`)).finally(putMethodTwoFinally => console.log(`The above output is the second technique for the PUT METHOD`));

// PATCH METHOD ONE :-
const patchMethodOne = () => {
    axios({
        method : "patch",
        url : "https://jsonplaceholder.typicode.com/todos/1",
        data: {
            title : "Patch Method",
            isCompleted : false
        }
    }).then(patchMethodOneResponse => console.log(patchMethodOneResponse)).catch(patchMethodOneError => console.log(`The Error for the PATCH METHOD ONe is ${patchMethodOneError}`)).finally(patchMethodOneFinally => console.log(`The above code is the example for the  PATCH METHOD ONE`));
}
patchMethodOne();

//PATCH METHOD TWO :-
const patchMethodTwo = axios.patch("https://jsonplaceholder.typicode.com/todos/1",{
    data: {
        title : "Complete the today task",
        isCompleted : true,
    }
}).then(patchMethodTwoResponse => console.log(patchMethodTwoResponse)).catch(patchMethodTwoError => console.log(`The Error for the patch method two is ${patchMethodTwoError}`)).finally(patchMethodOneFinally => console.log(`The above code is the example for the PATCH METHOD TWO`));

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

// //SIMULTANEOUS DATA (ALL) METHOD ONE :-
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

// //METHOD TWO FOR SIMULTANEOUS DATA (ALL) :-
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
        console.log("Accessing the Data inside the API : ",users.data[4].name,",The User Email is :",users.data[4].email);
        console.log("Accessing the DAta inside the API is Title:",posts.data[3].title);
    }))
    .catch(allMethodThreeError => console.error(`The Error for the all method using the method called SPREAD is ${allMethodThreeError}`))
    .finally(allMethodThreeFinally => console.log(`The above code is the example for the special method called SPREAD by using the SIMULTANEOUS (ALL) Method in AXIOS`));
}
allMethodThree();

async function fetchUserName(userId) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();
    console.log(userData[userId]);
    // Trying to access a nested property
    console.log("User's Name:", userData[userId].name); 
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}

fetchUserName(5);

const inputField = document.getElementById("form");
const button = document.getElementById("btn");

button.addEventListener("click", e => {
    const resultValue = Number(inputField.value);
    console.log(resultValue)
})

const inputValueGetter = () => {
    const inputField = document.getElementById("form");
    const button = document.getElementById("btn").addEventListener("click", e => {
        const result = inputField.value
        console.log(result)
    })
}
inputValueGetter();

const nestedAxiosAll = (value) => {
    const APIs = axios.all([
        axios.get("https://jsonplaceholder.typicode.com/users"),
        axios.get("https://jsonplaceholder.typicode.com/posts")
    ])
    .then(axios.spread( (users, posts) => {
        console.log(users.data[value].email);
        console.log(posts.data[value].body)
    }))
    .catch(err => console.error(`The Error is ${err}`))
    .finally((sum = "It'll definitely execute even there was an Error occurred 😞") => console.log(sum))
    return APIs
}
nestedAxiosAll(6);


//CREATE INTERCEPTORS,which will allow us to run some kind of functionality we can intercept the request and run functionality like a logger

//INTERCEPTING REQUEST AND RESPONSE :-  //Access the method, the urls by using the config as a parameter

const inter = axios.interceptors.request.use(config => {
    console.log(`The method is ${config.method.toUpperCase} in the URL of ${config.url} at the time of ${new Date().getDate}`);
    return config;
}, error => {
    return Promise.reject(error);
});

//CUSTOM HEADERS :- 1
const customHeaders = () => {
    //Custom Config Header :-
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "token"
        }
    }

    //Normal Post Request :-
    const requests = axios.post("https://jsonplaceholder.typicode.com/todos", {
        title: "New Todo",
        isCompleted: false
    }, config)
        .then(headerResponse => console.log(headerResponse))
        .catch(responseError => console.error(`The Error for the response is ${responseError}`))
        .finally(finalResponse => console.log(`This is the final Response ${finalResponse}`));
}
customHeaders();

//Second Try :-
//PRODUCT API
const PRODUCT_URL = "https://dummyjson.com/products";

function config() {
    const customHeader = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "someToken"
        }
    }

    axios.get(PRODUCT_URL)
    .then(productResponse => console.log(productResponse))
    .catch(productError => console.error(`The Error is ${productError}`))
}
config()

// EXPERIMENTED TEST :-
axios.get(PRODUCT_URL).then(res => console.log(res.data.products[0].description)).catch(err => console.log(`The error is ${err}`))







//CUSTOM HEADERS IN PRODUCTS API
const productCustomHeader = () => {
    const config = {
        header: {
            "Content-Type": "application/json",
            Authorization: "someToken"
        }
    }

    const productMethod = axios.get(PRODUCT_URL)
        .then(productResponse => {
            const div = document.createElement("div");
            console.log(div);
            div.textContent = `Your Product Details are : ${productResponse.data.products[0].description}`;
            console.log(productResponse);
            console.log(productResponse.data.products[0].description);
            document.body.appendChild(div);

        })
        .catch(productResponseError => console.error(`The Error is ${productResponseError}`))
}
productCustomHeader();


//TRANSFORMING REQUESTS AND RESPONSE :-
const transformResponse = () => {
    const options = {
        method : "post",
        url: "https://jsonplaceholder.typicode.com/todos",
        data : {
            title : `Hello World`
        },
        transformResponse : axios.default.transformResponse.concat(data => {
            data.title = data.title.toUppercase();
            return data;
        })
    }

    const method = axios(options).then(tRes => console.log(tRes)).catch(tResError => console.log(`The Error is ${tResError}`))
}
transformResponse();

//ERROR HANDLING :-
/*
1)Response - err.data, err.status, err.headers
2)Request - err.request, err.message
*/
//1
const errorHandlingMethod = () => {
    const methodGet = axios.get("https://dummyjson.com/products")
        .then(getResponse => {
            console.log(getResponse);
            return getResponse
        })
        .catch(getError => {
            if (getError.response) {
                //SERVER RESPONDED WITH A STATUS OTHER THAN 200 RANGE
                console.log(getError.response.data);
                console.log(getError.response.status);
                console.log(getError.response.headers);
                ///Nested If
                if (getError.response.status === 404) {
                    alert(`Error: Page Not Found`);
                }
            } else if (getError.request) {
                //Request was made but no response
                console.log(getError.request);
            } else {
                console.log(getError.message);
            }
        })
}
errorHandlingMethod();

//ERROR HANDLING TRY 2 :-
const errorHandlingMethodTryTwo = () => {
    const getError = axios.get("https://dummyjson.com/prducts")
        .then(getRes => {
            console.log(getRes);
        })
        .catch(getErr => {
            if (getErr.response) {
                console.log(getErr.response.data);
                console.log(getErr.response.status);
                console.log(getErr.response.headers);
                //Nested If Statement :-
                if (getErr.response.status === 404) {
                    alert(`Error : 404 Page Not Found`);
                }
            } else if (getErr.request) {
                console.log(getErr.request);
            } else {
                console.log(getErr.request.message);
            }
        })
}
errorHandlingMethodTryTwo();

//IMPLEMENTING THE ERROR HANDLING IN THE PRODUCT API :-
const productError = (index) =>  {
    const getAPI = axios.get("https://dummyjson.com/products")
                .then(getRes => {
                    const para = document.createElement("div");
                    para.textContent = `The Product id is ${ getRes.data.products[index].id} and the title of the product is ${ getRes.data.products[index].title}`;
                    console.log(getRes.data.products[index])
                    document.body.appendChild(para);
                })
                .catch(getErr => {
                    if (getErr.response) {
                        console.log(getErr.response.data);
                        console.log(getErr.response.status);
                        console.log(getErr.response.headers);

                        //Nested If Statement :-
                        if (getErr.response.status === 404) {
                            alert (`Error Occurred 404 Page Not Found`);
                        }
                    }else if (getErr.request) {
                        console.log (getErr.request);
                    }else {
                        console.log(getErr.message);
                    }
                })
}
productError(8);
