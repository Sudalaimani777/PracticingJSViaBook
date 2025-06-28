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


/* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold are allowed to upvote. */
const karma = 143;
const isModerator = true;

// first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
let hasEnoughKarma;
hasEnoughKarma = karma > 100  ? true : false;
//  set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
let canUpvote;
canUpvote = hasEnoughKarma && isModerator;
console.log("canUpvote:", canUpvote);

/* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  How would you set the canDelete variable */
// set canDelete to true if both hasEnoughKarma and isModerator is true
let canDelete;
canDelete = hasEnoughKarma && isModerator;
console.log("canDelete:", canDelete);

// Challenge 3: what is the value of user? What if you switch the hasValidEmail variable to false? What if the response is empty?
export const response = "JohnDoe";
export const hasValidEmail = true;
export const user = hasValidEmail && (response && "guest");
console.log("user: ", user);
