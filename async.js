// //CallBack Function :-
// // //The callback function is simply by calling the function as a parameter in the another function.
// // //It is very useful in Asynchronous JavaScript.

// // const funcA =  (wrapperOfB) => {
// //     console.log(`This is the function A`);
// //     wrapperOfB();
// // }
// // const funcB = () => {
// //     console.log(`This is the function B`)
// // }
// // funcA(funcB);

// // function res () {
// //     const api = fetch(`https://...`);
// //     const response = then(()=>{})
// //     return response;
// // }


// // console.log(`Line One`);

// // const timers =  setTimeout((name = `UserName`) => {
// //     console.log(`Timeout Call Function after 2 seconds and the name is ${name}`);
    
// // },2000);
// // console.log(`Line Three`);

// // const timer = () => {
// //     setInterval((user = `Sudalai`) => {
// //         console.log(`The user name is ${user} and the time interval to show the user name is 4 seconds repetitively`);
        
// //     }, 3000);
// // };
// // timer();


// //First Line :-
// console.log(`First line`);
// ///Second Line it consist of the "Web API" and the callback queue :-
// const button = document.getElementById("btn");
// button.addEventListener("click", e => {
//     console.log(`The second line where the button was  Clicked`);
//     setTimeout(() => {
//         console.log(`The second line and the callback function where it has a callback function and it is the setTimeout when the button was  clicked`)
//     }, 2000);
// });
// //Third console :-
// console.log(`The third line after the add Event listener`);

//callback hell :-
//bookHotel -> proceedToPay -> showBookingStatus -> updateBookingHistory (API's) 

const bookHotel = (hotelID, () => {
    if (error) {
        handleError();
    }
    else {
        proceedToPay(proceedToPayment, () => {
            if (error) {
                handleError();
            }
            else {
                showBookingStatus(bookingStatus, e => {
                    if (error) {
                        handleError();
                    }
                    else {
                        updateBookHistory(updatedStatus, e => {
                            if (error) {
                                handleError();
                            }
                            else {
                                console.log(`Success`);
                            }
                        })
                    }
                })
            }
        })
    }
});
