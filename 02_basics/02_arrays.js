//node 02_basics/02_arrays.js 
const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros) //this will create array inside an array this treats the pushed array whole as a single element 
// console.log(marvel_heros)
// console.log(marvel_heros[3])//the whole array
// console.log(marvel_heros[3][1]) //gives the value inside the array

// const allHeros=marvel_heros.concat(dc_heros) //concat return a new array 
// console.log(allHeros)
const all_new_Heros=[...marvel_heros,...dc_heros] //this ... makes all the element behave as a single element  known as spread operator 
console.log(all_new_Heros)
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)//this flat operator returns nested array into a single array
//in place of infinty we can also provide a number upto which we want sorting that is upto how much nesting for example int the above case there is 3 levels of nesting so we caan also provide 3 or less than 3 or even more
console.log(real_another_array)

console.log(Array.isArray("tanu")) //asking question
console.log(Array.from("tanu")) //forms an array the input can be anything object , sting etc 
console.log(Array.from({name:"tanu"})) // interesting case have to say keys ke array chahiye ya values or both
let score1=100; 
let score2=200; 
let score3=300;

console.log(Array.of(score1,score2,score3)) //returns an array from the given elements 