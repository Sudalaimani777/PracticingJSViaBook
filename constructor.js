/*
    Two Types :-
        1)Inbuilt - 
                Provides objects in various predetermined formats, like "Data Objects", "Error Objects" and "Objects for each data type".
                It always have a UpperCase in the starting of the constructor,
                    const date = new Date()
        2)Custom :- 
                Constructor we designed ourselves to produce objects for our own specific purposes.
*/ 

// //Date Connstructor :-
//  export const dateSnapshot = new Date()
//  console.log(dateSnapshot);

//  export const year = dateSnapshot.getFullYear();
//  console.log(year);
 
//  //Error Constructor :-
//  export const errorMessage = (userNames) => {
//     if(userNames) {
//         console.log(userNames);
//     }
//     else{
//         console.log(new Error(`Summa Try pannuda`));
//     }
//  }
//  errorMessage("Hari");
//  errorMessage();


// export function getStockData () {
//     return {
//         marketName : "QtechAI",
//         sym : "QTA",
//         price : (Math.random()*3).toFixed(2),
//         time : new Date().toLocaleDateString()
//     }
// }
// console.log(getStockData());
//Challenge :-
export const getStockData = () => {
    const stats = {
        marketName : "QtechAI",
        sym : "QTA",
        price : (Math.random()*3).toFixed(2),
        time : new Date().toLocaleDateString()
    }
    console.log(stats); 
}
getStockData();
