//1
 export const qOne = `What is the capital of Peru? `;
 console.log(qOne);

 export const ans = `Lima`;
 export const qOneAns = setTimeout(()=> {
    console.log(ans)
}, 3000);

export const message = `Ready for the next question ?`;
 export const setTime = setTimeout(() => {
    console.log(message);
 }, 6000);

//2
export const logAnswer = (answer, points) => {
    console.log(`The answer is ${answer} and you got the points of ${points}`);
}
console.log('What is the capital of Peru?')

export const logAnsTimer = setTimeout(()=> {
    logAnswer(`Lima`, 10);
}, 3000)


// //3
 export const shutDown = (device) => {
     let secondsRemaining = 3;
     const setIntervel = setInterval(() => {
         if (secondsRemaining > 0) {
             console.log(`Your ${device} will shutdown in ${secondsRemaining}`);
             secondsRemaining--;
         }
         else {
             console.log(`Your ${device} will shutdown`);
             clearInterval(setIntervel);
         }
    }, 1000);
};
shutDown("IQOO Z9S");
