let score = "33abc"
console.log(typeof score);
console.log(typeof(score))
let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log( valueInNumber); //NaN not a number
let score2=null
let conversion=Number(score2)
console.log(conversion)
console.log(typeof score2)

let score3=undefined
let conversion2=Number(score3)
console.log(conversion2)
console.log(typeof score3)

let score4=true;
let conversion4=Number(score4)
console.log(conversion4)
console.log(typeof score4)

let isLoggedIn=1
let booleanisLoggedIn=Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

let someNumber =33
let stringNumber=String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)

//conversions
//"33" =>33
//"33abc"=>NaN
//true=>1;false=>0
//boolean conversion 1->true; 0->false ;
//boolean conversion of ""->false; "tanu"->true