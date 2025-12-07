function provideId(id : string | null) {
    if(!id) {
        console.log("Please provide id");
        return ;
    }
    id.toLowerCase();
}

function printAll(strs : string | string[] | null) {
    if(strs === null) {
        console.log("provide strs it's null");
    }else if(strs === "object") {
        for(const str of strs) {
            console.log(str);
        }
    }else {
        for(const str of strs) {
            console.log(str);
        }
    }
}
printAll("avsdsd");
printAll(["adnid", "wcnbw", "ibvjw"]);

let arr: number[] = new Array();

function anotherFunction3(arr: number[] | null | string): void {
    if(arr instanceof Array) {
        console.log("It's the instance of the array");
        for(let val of arr) {
            console.log(val);
        }
    }else if(typeof arr === "string") {
        console.log("It's a string");
    }else {
        console.log("It's null");
    }
}

anotherFunction3([2,3,4,5]);
anotherFunction3("abfkf");
anotherFunction3(null);

// type predicates

type Fish = {
    swim : () => void;
}

type Bird = {
    fly : () => void
}

function isFish(pet : Fish | Bird) : pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet : Fish | Bird): string {
    if(isFish(pet)) {
        return "Fish food";
    }else {
        return "Bird food";
    }
}
// Discriminated union 
type Triangle = {
    kind : "triangle",
    length : number,
    height : number
}

type Square = {
    kind : "square",
    side : number
}

type Shape = Triangle | Square;
let pi: 3.14 = 3.14

function calculateArea(shape : Shape) {
    switch(shape.kind) {
        case "triangle" :
            return pi*shape.length*shape.height;
        case "square" :
            return shape.side * shape.side;
        default:
            const _defaultForShape: never = shape // checks is all the type included in switch or not
            // if we remove square from this case will through error square is not assignable to never 
            return _defaultForShape
    }
}

console.log("Area of the shape is " + calculateArea({kind : "square", side : 10}));
export{}