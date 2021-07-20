class User{
    name: string;
    email: string;
    age: number;

    constructor(name: string, email:string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
        console.log(`User Created:` + this.name)
    }
}

let user1 = new User(" Dvl", "dvl@me.com", 39)
console.log(user1)

let user2 = new User(" Shivam", "cvm@me.com", 39)
console.log(user2)