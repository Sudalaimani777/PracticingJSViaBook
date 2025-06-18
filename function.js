//1
export const lastChar = (name) => console.log(name[name.length-1]);
lastChar("Hllo");

//2
export const reverse = (char) =>  console.log(`The reversed word is ${char.split("").reverse().join()}`);
reverse("mani")

//3 
export const arr = [];

export const pushValue = (pushValue) => arr.push(pushValue);
pushValue("apple")

export const popvalue = popedValue => arr.pop(popedValue);
popvalue();

//Add and Remove;
//Push
pushValue("Apple");
pushValue("Mango");
pushValue("Orange");
pushValue("Grapes");
pushValue("WaterMelon");

//Pop
popvalue();

console.log(arr);
