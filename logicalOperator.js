export const maths  =  90;
export const physics =  95;
export const chemistry  =  88;
export const biology  =  96;

export const result = maths > 85 && physics > 85  && chemistry > 85 ? `You are eligible for Engineering` : biology  > 80 && chemistry > 80 ? `You are eligible for Doctor` : `You are eligible to study polyTechnic` ;              




console.log(result);

export let name;

console.log("Sudalaimani" ?? name);
