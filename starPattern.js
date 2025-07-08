let out = "";
for (let i = 0; i <= 10 ; i++) {
    out = out + "*" + " ";
    console.log(out);
}

let row = "";
for (let i = 0 ; i <=10 ; i++) {

    // Second Loop
    for (let j =  0 ; j <= i ; j++) {
        row = row + "* "
    }
    row = row + "\n";
}
console.log(row);


let rowReverse = "";

for ( let i = 10 ; i >= 0 ; i--) {

    // Second Loop
    for ( let j = 0 ; j <= i ; j++) {
        rowReverse = rowReverse + "* " ;
    }
    rowReverse = rowReverse + "\n";
}
console.log(rowReverse);


let opposite = "";

for (let i = 10 ; i >= 0 ; i--) {

    for (let j = 0 ; j <= i ; j++)  {
        opposite = opposite + "  " ;
    }

    for (let k = i ; k <= 10 ; k++) {
        opposite = opposite + "* ";
    }
    opposite = opposite + "\n";

}

console.log(opposite);


let upsideDown = "";

for ( let i = 0 ; i < 10 ; i++ ) {

    for ( let j = 0 ; j < i ; j++) {
        upsideDown = upsideDown + "  " ;
    }
    let temp = ( i*2 ) - 1
    for ( let k = temp ; k <= 11 ; k++) {
        upsideDown = upsideDown + "* "
    }

    upsideDown = upsideDown + "\n" ;

}
console.log(upsideDown);




function star(input) {   
    let funcMethod = "";

    for ( let i = input - 1 ; i >= 0 ; i--) {
        let temp = ( i * 2) - 1 ;

        for ( let j = 0 ; j < i ; j++) {
            funcMethod = funcMethod + "  "
        }

        for (let k = temp ; k <= ((input - 1) *2 ) - 1 ; k++ ) {
            funcMethod = funcMethod + " *"
        } 
        funcMethod =funcMethod + "\n" ;  
    }
    console.log(funcMethod);

}

star(2);

const mirrorFunc = (inputs) => {
    let mirrorStar = "";

    for (let i = inputs-1 ; i > 0 ; i--) {

        let temp = i * 2  - 1 ;
        for ( let j = 0 ; j <= i ; j++) {

             mirrorStar = mirrorStar +  "  "
        }

        for ( let k = temp ; k <= ((inputs - 1) * 2) - 1 ; k++) {
            mirrorStar =mirrorStar + "* "
        }
        mirrorStar = mirrorStar +  "\n"
    }

    for ( let i = inputs ; i > 0 ; i--) {

        for (let k = inputs ; k < inputs ; k++) {
             mirrorStar =mirrorStar + "  " ;
        }

        let temp = i * 2 - 1 ;
        for ( let j = 0 ; j < temp ; j++) {
            mirrorStar =mirrorStar + "* " ;

        }
        mirrorStar = mirrorStar + "\n";
    }
    console.log(mirrorStar);


}

mirrorFunc(3);