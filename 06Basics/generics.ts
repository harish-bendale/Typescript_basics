function identityThree<T>(val : T) : T {
    return val;
}

function identityFour<Type>(val : Type) : Type {
    return val;
}

function identityFive<k>(val : k) : k {
    return val;
}

interface Bottle {
    brand : string,
    name : string
}

function identitySix<T>(temp1 : T) : T{
    
    return temp1;
}

let temp: Bottle = {
        brand : "abc",
        name : "def"
    }
const temp3 = identitySix(temp);
console.log(temp3);

function identitySeven<T>(val : T): void { // generics (T) tracks the datatype and remembers it, compiler gives error which is not in case of "any"
    console.log("identity seven");
}


let temp4 = (): number => 0; // normal arrow method
let temp5 = <T>(val : T) : T => val; // generic arrow method
let temp6 = <T>(val : T): void => {
    console.log("do nothing");
}

function identityEight<T>(val : T[]): T {
    return val[2];
}

function identityNine<T>(val: Array<T>): Array<T>{
    return val;
}
export{}