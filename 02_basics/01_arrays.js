//  node 02_basics/01_arrays.js
// ARRAYS 
//Arrays in JS is resizeable 
//Arrays in javascript forms shallow copy when copy operations are applied 
//shallow copy=copy whose properties share the same referenced point 
//deep copy=>do not share the same reference 
//refer to mdn reference 
const myArr=[0,1,2,3,4,5 , true ,"tanu"] //array->elements of array can  be different 
const myHeroes=["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4) //array declaration using keywords 
console.log(myArr[2])
// array mthods
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)// the elements get inserted at the starting shifting the other elements
myArr.shift()//the first element get removed from the error  
console.log(myArr.includes(9)) //returns true or false 
console.log(myArr.indexOf(3)) //return index
const newArr=myArr.join() //adds all the element of an array into  a string seperated by the specific seperator
console.log(myArr)
console.log(newArr)
console.log(typeof newArr) //this will give string due to .join function 


//slice ,splice 


//slice 
console.log("A ",myArr)
const myn1=myArr.slice(1,3);//startin index included last index not included i.e. 1 included 3 not included 
console.log(myn1);
console.log("b ",myArr)

//splice 
const myn2=myArr.splice(1,3);//startin index included last index also included i.e. 1 included 3 also included 
console.log("c ",myArr)
console.log(myn2);

//difference between slice and splice 
//slice -> original array remains the same and the staring point of range is included while the ending part of the range is not included
//splice ->original array changes the elements of the given ranges gets deleted and both the starting and ending point is included