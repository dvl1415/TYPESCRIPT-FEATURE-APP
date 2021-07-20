var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created:" + this.name);
    }
    return User;
}());
var user1 = new User(" Dvl", "dvl@me.com", 39);
console.log(user1);
var user2 = new User(" Shivam", "cvm@me.com", 39);
console.log(user2);
