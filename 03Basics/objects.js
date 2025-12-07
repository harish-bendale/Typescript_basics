function createUser(_a) {
    var name = _a.name, isValid = _a.isValid;
    return {
        name: "Krishna",
        isValid: true
    };
}
var temp = { name: "Prathamesh", isValid: false, email: "23234@.com" };
createUser(temp);
function login(user) {
    return user;
}
var data = login({ name: "ABC", id: 20, email: "abc@.com" });
console.log(data.name + " " + data.id + " " + data.email);
var data1 = {
    id: "1234",
    name: "BCD",
    phone_no: 100000
};
console.log(data1.id);
var card1 = {
    cardnumber: 1234,
    carddate: "2002-12-30",
    cvv: 4567
};
console.log(card1.cardnumber + " " + card1.carddate + " " + card1.cvv);
// Union
var num;
num = 66;
num = "3";
function getDetailsFromUser(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    if (typeof id === "number") {
        console.log(id + 2);
    }
}
getDetailsFromUser(3);
getDetailsFromUser("4");
var data2 = [1, 2, 3, 4];
var data3 = ["a", "b", "c"];
// let data4: string[] | number[] = [1, 2, 3, 4, "abc"];// common mistake should be as follows
var data4 = [1, 2, 3, 4, "abc"];
data4.forEach(function (n) { return console.log(n); });
