function add(num : number) {
    return num + 2;
}

function login(email : string, password : string, otp : number) {
    return {
        email : email,
        password : password,
        otp : otp
    }
}

function getUpperCase(str : string) {
    console.log(str.toLocaleUpperCase());
    return str.toUpperCase();
    
}

let detail = login("prathamesh", "pune@123", 123);

console.log(detail.email + " " + detail.password + " " + detail.otp);
console.log(getUpperCase("hello world"));

const getValue = (val: number, str: string) => {
    return "";
}

function addTwo(val1 : number, val2 : number) {
    return val1 + val2;
}

console.log(addTwo(10, 9));

const heros : string[] = ["spiderman", "marvel dc", "power ranger"];

heros.forEach(n => console.log(n + " "));
for(let i=0; i<heros.length; i++) {
    let result : string = "";
    for(let j=0; j<heros[i].length; j++) {
        result += heros[i][j];
        result += " ";
    }
    console.log(result);
}

function consoleError(errmsg : string) : void {
    console.log(errmsg);
}

function handleError(errmsg : string) : never {
    throw new Error(errmsg);
}
export {}