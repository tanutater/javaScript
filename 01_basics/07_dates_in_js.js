//  node 01_basics/07_dates_in_js.js
let myDate =new Date() //month starts from 0 in java script  for single digit but when written in DD-MM-YYYY format it starts from 01
console.log("default :" ,myDate)
console.log("String : ",myDate.toString())
console.log("date string  : ",myDate.toDateString())
console.log("ios String : " ,myDate.toISOString())
console.log("JSON : ",myDate.toJSON())
console.log("Local Date String:",myDate.toLocaleDateString())
console.log("Local TIme String : ",myDate.toLocaleTimeString())
console.log(typeof myDate);


let myCreatedDate =new Date(2024,0,23)
console.log(myCreatedDate.toDateString())
let myCreatedDate2=new Date(2024,0,5,3,5)//year-month-date hour-minute-seconds
console.log(myCreatedDate2.toLocaleString())

let myCreatedDate3=new Date("2024-01-14") //DD-MM-YYYY
console.log(myCreatedDate3.toLocaleString());
let myCreatedDate4=new Date("01-14-2024") //MM-DD-YYYY
console.log(myCreatedDate4.toLocaleString())


let myTimeStamp = Date.now()//mostly used in quizes for recording the fastest time 
console.log(myTimeStamp)
console.log(myCreatedDate4.getTime())
console.log(Math.floor(Date.now()/1000)) // to convert into  time in seconds 

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`)

newDate.toLocaleDateString('default',{
    weekday:"long"
})