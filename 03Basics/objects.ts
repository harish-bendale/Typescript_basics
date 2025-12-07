function createUser({name , isValid} : {name : string, isValid : boolean}) : {name : string, isValid : boolean} {
    return {
        name : "Krishna",
        isValid : true
    }
}

let temp = {name : "Prathamesh", isValid : false, email : "23234@.com"};
createUser(temp);

type User = {
    name : string;
    id : number;
    email : string
};

function login(user : User) : User {
    return user;
}

let data = login({name : "ABC",  id : 20, email : "abc@.com"});

console.log(data.name + " " + data.id + " " + data.email);

type UserDetails = {
    readonly id : string;
    name : string;
    phone_no : number
    alternate_phone_no ?: number // optional field
}

let data1: UserDetails = {
    id : "1234",
    name : "BCD",
    phone_no : 100000

}

console.log(data1.id);
// data1.id = "2345"; // can't do it bcz of readonly

type cardNumber = {
    cardnumber : number;
}

type cardDate = {
    carddate : string;
}

type cardDetails = cardNumber & cardDate & {
    cvv : number;
} 

let card1 : cardDetails = {
    cardnumber : 1234,
    carddate : "2002-12-30",
    cvv : 4567
}

console.log(card1.cardnumber+ " " + card1.carddate + " " + card1.cvv);

// Union

let num : number | string;
num = 66;
num = "3";

function getDetailsFromUser(id : number | string) : void{

    if(typeof id === "string") {
        console.log(id.toUpperCase());
    }

    if(typeof id === "number") {
        console.log(id + 2);
    }
}

getDetailsFromUser(3);
getDetailsFromUser("4");

let data2: number[] = [1, 2, 3, 4];
let data3: string[] = ["a", "b", "c"];

// let data4: string[] | number[] = [1, 2, 3, 4, "abc"];// common mistake should be as follows

let data4: (string | number)[] = [1, 2, 3, 4, "abc"];

data4.forEach(n => console.log(n));

let pi: 3.14 = 3.14;
let seatType : "aisle" | "window" | "middle";
seatType = "aisle";
// seatType = "lower"; // can't do it 

export{}