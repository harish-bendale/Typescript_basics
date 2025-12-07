// Difference between type and interface refer link -> https://www.typescriptlang.org/docs/handbook/2/everyday-types.html


// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.


// We can also write methods in type aliases
interface User2 {
    readonly id : number,
    email : string,
    userId : number,
    googleId ?: string,
    startTrial: ()=> string // method named startTrial which should return string
    
    getCoupon: (couponName : string, value: number)=> number 
}

// let data6: User2 = {
//     id: 123,
//     email: "abc@.com",
//     userId: 1111,
//     googleId: "234",
//     startTrial: () => {
//         return "Trial started";
//     },
//     getCoupon:(name: string= "ChristamsSale", val: number= 10) => {
//         console.log(name + " " + val);
//         return 10;
//     }
// }

// data6.email = "h2@.com";

// console.log(data6);
// console.log(data6.startTrial());
// console.log(data6.getCoupon("ABC", 0));

// interface opening

interface User2 { // adding extra properties in already declared interface is re-opening of an interface
    github : string
}

let data6: User2 = {
    id: 123,
    email: "abc@.com",
    userId: 1111,
    googleId: "234",
    startTrial: () => {
        return "Trial started";
    },
    getCoupon:(name: string= "ChristamsSale", val: number= 10) => {
        console.log(name + " " + val);
        return 10;
    },
    github: "123455"
}

console.log(data6.github);

interface Admin extends User2 {
    role : "admin" | "ta" | "learner"
}

let data7 : Admin = {
    id: 123,
    email: "abc@.com",
    userId: 1111,
    googleId: "234",
    startTrial: () => {
        return "Trial started";
    },
    getCoupon:(name: string= "ChristamsSale", val: number= 10) => {
        console.log(name + " " + val);
        return 10;
    },
    github: "123455",
    role : "admin"
}
export {}