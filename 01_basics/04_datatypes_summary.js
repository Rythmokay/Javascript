// Primitive
// 7 types : String, Number, Boolearn, null, undefined, Symbol,BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const Anotherid= Symbol('123')
console.log(id);
console.log(Anotherid);
console.log(Anotherid===id);
console.bigNumber=12144657689676332456754n
// Reference (Non primitive)
// Array, Objects, Functions
const heros =["shaktiman","naagraj","doga"]
let myobj={
    name :"Rythm",
    age:22,
}
//values in curly bracets are objects 
const myfunction=function(){
    console.log("Helo world ");
}
//
console.log(typeof outsideTemp);