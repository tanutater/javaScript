console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)

console.log("2">1);
console.log("02">1)
console.log(null>0)    //false
console.log(null==0)   //false
console.log(null>=0)   //true
console.log(null<0)   //false
console.log(null<=0)  //true
// the reason is that an equality check == and comparisons > < >= <= works differently.Comparison convert null to a number, treating it as 0. That's why null>=0  or null<=0 is true and null>0 or null<0 is false 

console.log(undefined>0)   //false
console.log(undefined==0)  //false
console.log(undefined>=0)  //false
console.log(undefined<0)   //false
console.log(undefined<=0)  //false

// === strictly check not only values but datatypes also
console.log("2"===2) //false