// node 01_basics/06_nums_and_maths.js
const score=400
console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))//decimals 

const otherNumber =23.8966
console.log(otherNumber.toPrecision(3))

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')) //this en-IN changes the us standard to indian standards number system


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-20))
console.log(Math.round(4.7))
console.log(Math.ceil(4.3)) //ceil helps in controlling the round off if we want the number to round off to next higher number we use ceil and for lower value we use floor
console.log(Math.floor(5.6))
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))
console.log(Math.random()) // value always in between 0 and 1


console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1))+min)