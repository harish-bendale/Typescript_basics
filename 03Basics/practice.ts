type User2 = {
    name : string,
    email : string,
    phone_no : number
}

function getDetails(user : User2) : void{
    console.log(user.name + " " + user.email + " " + user.phone_no);
}

getDetails({name : "ABC", email : "abc@gmail.com", phone_no : 234567});

function getUserDetails({name , email} : {name : string, email : string}) : {name : string, email : string}{
    return {name : "ABC",
        email : "AbC@gmail.com"
    }
}

let user3 = getUserDetails({name : "bcd", email : "jkl@gmail.com"});

console.log(user3.name + " " + user3.email);

type temp2 = {
    brand : string,
    name : string
}

let b1 : temp2 = {
    brand : "abc",
    name : "def"
}
console.log(b1.brand + " " + b1.name);

export {}