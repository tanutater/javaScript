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

// ******************************************OPERATIONS****************************************************

let value=3
let negValue=-value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)//power
console.log(2/3)
console.log(2%3)//remainder

let str1="hello "
let str2="Tanu"
let str3=str1+str2
console.log(str3)

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log(true)//ans true
console.log(+true)//ans 1
// console.log(true+) //error
console.log(+"");//ans 0

let num1, num2, num3
num1=num2=num3=2 + 2

let gameCounter =100
gameCounter++ // or ++gameCounter 
console.log(gameCounter)