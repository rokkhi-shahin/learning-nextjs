/* 
Interface practice
*/

export interface RectangleOptions {
    width: number;
    length: number;
}

function drawRectangle(options: RectangleOptions){
    let width = options.width;
    let length = options.length;
    console.log("options", options);
}

let threeDoptions = {
    width: 30,
    length: 20,
    height: 30
}
// not strict beacuse of reference of value
// required options are given so error not showing
drawRectangle(threeDoptions)
// strict beacuse of direct value
drawRectangle({width: 30,length: 20,height: 30})

/*
Generics
*/
export interface Player {
    name: string;
    age: number;
}
// T represents generic type
const addId = <T extends Player>(obj: T) =>{
    let id = Math.floor(Math.random() * 100);
    return {...obj, id};
};

let user = addId({
    name:"mashrafi",
    age: 40,
    country: "BD"
})
// let userStr = addId("mashrafi")
console.log(user.country);

/*
Generics in API reponse
*/
export interface APIResponse<T>{
    status: number;
    type: string;
    data: T;
}

const response: APIResponse<object> = {
    status: 200,
    type: 'success',
    data: {
        name: 'John Doe',
        age: 40  
    }
}

/*
Enum
*/
// type success is index 0 here
enum ResponseType {
    SUCCESS,
    FAILURE,
    UNAUTHORIZED,
    FORBIDDEN
}

export interface APIResponse2<T>{
    status: number;
    type: ResponseType;
    data: T;
}

const response2: APIResponse2<object> = {
    status: 200,
    type: ResponseType.SUCCESS,
    data: {
        name: 'John Doe',
        age: 40  
    }
}
console.log(response2);
/*
Tuples
*/
let a = [3, 'hello', {p:3}];
// lets say type in order
let b:[number, string, object] = [4, 'hello', {t:4}];
// Literal Types
function makeDirection(title: string, direction: "left" | "right") {
    console.log(`${title} ${direction}`);
}
// Now value for direction have to either left or right
makeDirection("Turn", "left");
console.log("Time Now: ",new Date().toLocaleTimeString());
