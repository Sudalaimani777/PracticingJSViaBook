export const maths  =  90;
export const physics =  95;
export const chemistry  =  88;
export const biology  =  96;

//1
export const result = maths > 85 && physics > 85  && chemistry > 85 ? `You are eligible for Engineering` : biology  > 80 && chemistry > 80 ? `You are eligible for Doctor` : `You are eligible to study polyTechnic` ;              
console.log(result);

//2
export let name;
console.log("Sudalaimani" ?? name);

//3
export const playerGuess = 3
export const correctAnswer = 6
export const message = playerGuess === correctAnswer ? `Correct` : `Wrong`;
console.log(message);

//4
export const guess = playerGuess > correctAnswer ? `Too High` 
                    : playerGuess === correctAnswer ? `Exactly Right` 
                    : playerGuess < correctAnswer ? `Too Low` : `None`;
console.log(guess);
console.log(message);

//5 - Switch :-
export const selectItem = (item) => {
    let price = 0
  
    switch(item) {
        case 'coffee':
            price = 2
            break ;
        
        case "Sandwiches" :
            price = 5 ;
            break;
        
        case "Salad" :
            price = 4;
            break;
            
        case "Lemon Cake" :
            price = 3;
            break;   
        
        default :
            return `Sorry, we dont't sell this  item, ${item}`
    }
    return `You selected ${item}. That will be $${price}`
}
console.log(selectItem('biscuits'))

//6
export const dreamHoliday = {
    destination: 'Austin, Texas',
    activity: 'visit the Tesla HQ',
    accommodation: 'luxury ranch',
    companion: 'Elon Musk'
}

//7
export const {destination:place, accommodation, activity, companion} = dreamHoliday;
console.log(place);
console.log(dreamHoliday.name);
