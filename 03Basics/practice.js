function getDetails(user) {
    console.log(user.name + " " + user.email + " " + user.phone_no);
}
getDetails({ name: "ABC", email: "abc@gmail.com", phone_no: 234567 });
function getUserDetails(_a) {
    var name = _a.name, email = _a.email;
    return { name: "ABC",
        email: "AbC@gmail.com"
    };
}
var user3 = getUserDetails({ name: "bcd", email: "jkl@gmail.com" });
console.log(user3.name + " " + user3.email);
