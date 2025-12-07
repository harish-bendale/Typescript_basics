class User {
    public name : string
    public age : number
    private salary : number = 0
    protected githubId : number = 0
    readonly role : string = "learner"
    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }

    private deleteToken() {
        console.log("Token deleted");
    }
    set setSalary(salary : number) { // setters cannot have return type
        this.salary = salary;
    }

    get getSalary(): number { // getters cannot have input parameters
        return this.salary;
    }

    get getGithubId(): number {
        return this.githubId
    }
}

class SubUser extends User {
    githubId = 20
    get getGithubId(): number {
        return this.githubId
    }
}
const user4 = new User("ABC", 57);
console.log(user4.name + " " + user4.age);
user4.setSalary = 40;

user4.getSalary;

const user5 = new User("BCD", 58);
const user6 = new SubUser("CDE", 59);

console.log(user5.getGithubId + " " + user6.getGithubId);
export {}