//  node 01_basics/datatypes_summary
//JavaScript is dynamically typed language
// types of data types -> primitive and non-primitive(reference type)
//primitive (call by value )->string ,number ,boolean ,null ,undefined ,symbol ,BigInt 

const score =100
const scoreValue=100.3
const isLoggedIn=false
const OutTemp=null
let UserEmail //type undefined nothing given 
const id = Symbol('123')
const anotherId =Symbol('123') //symbol used to make unique 
console.log(id===anotherId) // answer== false meaning even if same string is passes symbol makes it unique 

const bigNumber = 34358849454165415415551451n //BigInt datatype


// reference(or non-primitive ) (call by reference )-> Arrays ,Objects ,Functions 

const heros=["shaktiman","naagraj","goga"]; //array
let myObj={ //objects (inside curly bracket )
    name:"tanu",
    age:22,
}

const myFunction=function(){ //function
    console.log("hello ! World")
}

console.log(typeof bigNumber)



// return type of variables

//PRIMITIVE
//Number=>number
//String=>string
//Boolean=>boolean
//null=>object
//undefined=>undefined
//symbol=>symbol
//BigInt=>bigint

//NON-PRIMITIVE 
//Arrays=>object
//Object=>object
//Functions=>function

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack memory and heap memory 
// stack used in primitive(copy) type and heap memory is used in non-primitive (reference) type 

let myYoutubename="tanu.com"

let anotherName=myYoutubename
anotherName="abc"
console.log(myYoutubename)
console.log(anotherName)


let user1={
    email:"user@google.com",
    upi:"user@ybl"
}
let user2=user1

user2.email= "tanu@google.com"

console.log(user1.email)
console.log(user2.email)