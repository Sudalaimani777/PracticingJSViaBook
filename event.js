//1
export const headTag = document.createElement("h1");
headTag.innerText = "JS Is Fun";
document.body.appendChild(headTag);
headTag.addEventListener("click", e => {
    headTag.style.color = "red";
});


//2 Key Event
 export const keyBoardEvent = document.addEventListener("keydown", e => {
    document.body.innerHTML = `<div>e.code : ${e.code}</div>
    <div>e.key : ${e.key} </div>`
 })

//3 Key Up
//Creatin a inputField
export const inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.id = "input";
// console.log(inputField);
    document.body.appendChild(inputField);

//Creating the button
export const button = document.createElement("button");
    button.innerText = "Add";
    button.id = "btn";
    document.body.appendChild(button);

//Creating the h1 Tag 
export const heading = document.createElement("h1");
    heading.id = "head";
    document.body.appendChild(heading);
    console.log(heading);


inputField.addEventListener("keyup", e => {
    e.preventDefault();
    heading.innerText = inputField.value;
    console.log(heading);
      
})