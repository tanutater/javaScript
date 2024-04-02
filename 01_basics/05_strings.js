const name="tanu"
const repoCount=50
// console.log(name+repoCount)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('tanu-name-com')//another way of declaring a string 

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('n'))
const newString=gameName.substring(0,4) //start and end number  and last value is not included 
console.log(newString)

const anotherString=gameName.slice(0,8) // it can have negative value also when negative value is given it starts from reverse 
console.log(anotherString)

const anotherString2=gameName.slice(-8,6);
console.log(anotherString2)

const newString1="           tanu           "
console.log(newString1)
console.log(newString1.trim())

const url="https://tanu.com/tanu%20hello"
console.log(url.replace('%20','-'))
console.log(url.includes('tanu'))// to know if the url contains that elements or not 

console.log(gameName.split('-'))//gives an array