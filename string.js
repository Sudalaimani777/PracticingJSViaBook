//Index Of method :-
export let mess = "Sudalaimani";
export const displayMesage = (val) => {
    return mess.indexOf(val);
}
console.log(displayMesage("i"));

export const para = document.getElementById("para");
para.textContent = displayMesage();
para.style.textAlign = "center";
para.style.fontSize = "100px"
para.style.fontFamily = "arial "

//Includes :-

// It is used to check the character is present or not.It return the boolean value either true or false.
console.log(mess.includes("e"));
console.log(mess.includes("S"));
