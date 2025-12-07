function anotherFunction<T, U>(valOne : T, valTwo: U) : object {
    return {
        valOne,
        valTwo
    }
}

console.log(anotherFunction(1, 2));

function anotherFunction1<T, U extends string>(valOne : T, valTwo : U): object {
    return {
        valOne,
        valTwo
    }
}

console.log(anotherFunction1(1, "2"));

interface Database {
    connection : string,
    username : string,
    password : string
}

function anotherFunction2<T, U extends Database>(valOne : T, valTwo : U) : object {
    return {
        valOne,
        valTwo
    }
}

console.log(anotherFunction2(2, {
    connection : "abc",
    username : "bcd",
    password : "2344"
}));

interface Quiz {
    name : string,
    type : string
}

interface Course {
    name : string,
    author : string,
    subject : string
}

class Sellable<T>{
    cart : T[] = []

    addProduct(product : T) {
        this.cart.push(product);
    }

}