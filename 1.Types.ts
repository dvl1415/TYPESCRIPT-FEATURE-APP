let myString: string;
let myNumber: number;
let myBool: boolean;
let myVariable: any;

let strArray: string[];
let numArray: number[];
let boolArray: boolean[];

myString = "Hello"
myNumber = 1
myBool = true
myVariable = true

strArray = ["Scott", "Adam", "DVL"]
console.log(strArray)

numArray = [1,2,3,4,5]
console.log(numArray)

boolArray = [true,false, true]
console.log(boolArray)

/*
    ! Tuple in TypeScript
*/
let strNumTuple: [string, number]

strNumTuple = ["Hello",5]
console.log(strNumTuple)

let empId: number = 1;
let empName: string = "DVL";
let employee: [number, string] = [empId, empName]

console.log(employee)

let myVoid : void = undefined;
console.log(myVoid)

let myNull : null = null;
console.log(myNull)

let myUndefined : undefined = null;
console.log(myUndefined)