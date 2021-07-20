// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 20] = "Down";
    Direction[Direction["Left"] = 30] = "Left";
    Direction[Direction["Right"] = 40] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
var Week;
(function (Week) {
    Week[Week["Sunday"] = 1] = "Sunday";
    Week[Week["Monday"] = 2] = "Monday";
    Week[Week["Tuesday"] = 3] = "Tuesday";
    Week[Week["Wednesday"] = 4] = "Wednesday";
    Week[Week["Thursday"] = 5] = "Thursday";
    Week[Week["Friday"] = 6] = "Friday";
    Week[Week["Saturday"] = 7] = "Saturday";
})(Week || (Week = {}));
console.log(Week);
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
console.log(UserResponse.Yes);
function APIResponse(message, response) {
    if (message) {
        return UserResponse.Yes;
    }
    else {
        return UserResponse.No;
    }
}
console.log(APIResponse());
/*
  ? String Enums
*/
var UserDirection;
(function (UserDirection) {
    UserDirection["UP"] = "UP";
    UserDirection["DOWN"] = "DOWN";
    UserDirection["LEFT"] = "LEFT";
    UserDirection["RIGHT"] = "RIGHT";
})(UserDirection || (UserDirection = {}));
console.log(UserDirection);
/*
  ? HetroGenous Enums
*/
var Weekend;
(function (Weekend) {
    Weekend["FRIDAY"] = "FRIDAY";
    Weekend[Weekend["SATURDAY"] = 1] = "SATURDAY";
    Weekend[Weekend["SUNDAY"] = 2] = "SUNDAY";
})(Weekend || (Weekend = {}));
console.log(Weekend.FRIDAY);
console.log(Weekend.SATURDAY);
